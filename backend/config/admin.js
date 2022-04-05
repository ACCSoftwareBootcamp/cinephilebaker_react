module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce692858c8d28450d82e925901f18e81'),
  },
});
