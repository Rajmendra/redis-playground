const client = require('./client');
async function init(){
  //await client.set('msg:65', 'Hey from Node js');
  //await client.expire('msg:6', 10);
  // const result = await client.get('msg:65');
  await client.lpush('messages', 1);
  await client.lpush('messages', 2);
  await client.lpush('messages', 3);
  const result = await client.lpush('messages', 4);

  console.log('result->', result);
  
}
init();
