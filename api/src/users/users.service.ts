import { HttpStatus } from '../common/http-status.type';
import { RouteError } from '../common/route-error';
import { sql } from '../db';
import type { UserRegistrationBody } from './users.schema';

async function create(userRegistrationBody: UserRegistrationBody) {
  const { email, password, username } = userRegistrationBody.user;
  // const result = await sql`SELECT 1 FROM users WHERE email = ${email} LIMIT 1`;
  // const isEmailTaken = !!result.length;
  const isEmailTaken = false;

  if (isEmailTaken) {
    throw new RouteError(
      HttpStatus.UNPROCESSABLE_ENTITY,
      'Email already taken'
    );
  }

  const isUsernameTaken = false;

  if (isUsernameTaken) {
    throw new RouteError(
      HttpStatus.UNPROCESSABLE_ENTITY,
      'Username already taken'
    );
  }

  return {
    user: {
      email,
      token: 'token',
      username,
      bio: '',
      image: '',
    },
  };
}

export const usersService = {
  create,
};
