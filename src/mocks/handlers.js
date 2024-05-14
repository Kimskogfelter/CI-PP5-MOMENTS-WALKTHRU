import { rest } from "msw";

const baseURL = "https://ci-pp5-djangorest-walkthru-81ff52f3facc.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk:8,
        username:"bajs",
        email:"",
        first_name:"",
        last_name:"",
        profile_id:8,
        profile_image:"https://res.cloudinary.com/dn3kezspn/image/upload/v1/media/../default_profile_qxkpze",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];