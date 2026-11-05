import {collections} from "./catalog";import {config} from "./config";export function reply(message:string){
    const q = message.toLowerCase();
    let answer = "",
      action = "";
    if (/allerg|ingredient|vegan|sugar|nutrition|milk|gluten|certif/.test(q))
      answer =
        "I don’t have verified ingredient, allergen or nutrition labels. Please check the product packaging and confirm with Him Cream before choosing a product. Call " +
        config.phone +
        ".";
    else if (/price|cost|₹|rupee|discount/.test(q))
      answer =
        "Current prices and offers need confirmation from Him Cream. Online payment is not enabled here. Please send a product enquiry or call " +
        config.phone +
        ".";
    else if (
      /deliver|shipping|stock|available|availability|store|buy|order|payment/.test(
        q,
      )
    ) {
      answer =
        "Delivery coverage, local stock and fulfilment are confirmed by the Him Cream team. This website accepts enquiries; it does not take payments or confirm orders. Call " +
        config.phone +
        " or send an enquiry.";
      action = "contact";
    } else if (/distribut|retail|partner|business|franchise/.test(q)) {
      answer =
        "Interested in distributing or retailing Him Cream? Share your city, business type and requirements through the partnership form. The team must confirm terms, margins and territory directly.";
      action = "partnership";
    } else if (
      /contact|phone|email|address|location|human|person|support/.test(q)
    ) {
      answer = `Contact Him Cream at ${config.phone} / 9765607772 or ${config.email}. Manufactured and marketed by PATIL AGRO PRODUCT COMPANY, ${config.address}.`;
      action = "contact";
    } else if (/story|himal|brand|about him cream/.test(q)) {
      answer =
        "Him Cream’s brand story draws inspiration from the Himalayas. Its tagline is “Ye to amrit hai!” The business contact listed on the source website is in Sangli, Maharashtra.";
      action = "story";
    } else if (/hello|^hi\b|hey|help/.test(q))
      answer =
        "Hello! I can help you explore the catalog, find a flavour, make a distributor enquiry or contact the team. What would you like to know?";
    else {
      const tokens = q
        .replace(/[^a-z0-9 ]/g, " ")
        .split(/\s+/)
        .filter(
          (w: string) =>
            w.length > 2 &&
            ![
              "the",
              "are",
              "what",
              "have",
              "you",
              "your",
              "tell",
              "about",
              "show",
              "want",
              "some",
              "cream",
              "ice",
              "for",
            ].includes(w),
        );
      const matches = collections
        .flatMap((c) =>
          c.products.map((p) => ({
            p,
            c,
            score: tokens.reduce(
              (n: number, t: string) =>
                n + ((p.name + " " + c.name).toLowerCase().includes(t) ? 1 : 0),
              0,
            ),
          })),
        )
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 7);
      if (matches.length) {
        answer =
          "In the catalog: " +
          matches
            .map((x) => `${x.p.name}, ${x.p.size} (${x.c.name})`)
            .join("; ") +
          ". Availability and current prices are confirmed by the team.";
        action = "collections";
      } else if (
        /collection|catalog|flavour|flavor|product|range|menu/.test(q)
      ) {
        answer =
          "Explore " +
          collections.map((c) => c.name).join(", ") +
          ". Ask me about a specific flavour or open the collection.";
        action = "collections";
      } else
        answer =
          "I couldn’t find a verified answer in the Him Cream catalog. I can help with collections, flavours, partnership enquiries and contact information. For anything else, call " +
          config.phone +
          " or email " +
          config.email +
          ".";
    }
return {answer,action};}