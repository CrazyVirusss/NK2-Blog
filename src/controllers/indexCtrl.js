import data from '../models/indexDB'

export default async (ctx, next) => {

  await ctx.render('index', {data});
  console.log(':)' + data.id + data.name);
}
