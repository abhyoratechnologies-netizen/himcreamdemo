import {reply} from '../../lib/reply';
export default async function chat(request:Request) {
 if(request.method!=='POST')return Response.json({error:'POST required'},{status:405});
 try{const body=await request.text();if(body.length>4000)return Response.json({error:'Question too long'},{status:413});const {message}=JSON.parse(body);
 if(typeof message!=='string'||!message.trim()||message.length>500)return Response.json({error:'Enter a question under 500 characters.'},{status:400});
 return Response.json(reply(message));}catch{return Response.json({error:'Invalid question'},{status:400});}
}
export const config={path:'/api/chat',rateLimit:{windowLimit:40,windowSize:60,aggregateBy:['ip']}};
