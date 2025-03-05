import Fastify from 'fastify'
import cors from '@fastify/cors'
import fs from 'fs'
const fastify = Fastify({
  logger: true
})

fastify.register(cors);

// Declare a route
fastify.get('/fluorite/get', async function handler (_request, _reply) {
  const data = fs.readFileSync('src/fluorite.json', 'utf8');
  const json = JSON.parse(data);
  return json;
})

fastify.post('/fluorite/increment', async function handler (_request, _reply) {
  const data = fs.readFileSync('src/fluorite.json', 'utf8');
  const json = JSON.parse(data);
  const amount = json.amount + 1;
  json.amount = amount;
  fs.writeFileSync('src/fluorite.json', JSON.stringify(json));
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
  console.log(`Server listening on 3000`)
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

process.on('exit', function() {
  fastify.close();
  console.log('About to close');
});