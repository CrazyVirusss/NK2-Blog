import mysql from 'mysql2'
import config from '../config'

export default async (ctx, next) => {
  // const title = 'koa2 title'
  let param = {
    title:'koa2 title',
    id:'',
    name:''
  }
  const db = mysql.createConnection(config.db);

  await db.connect(function (err) {
    if (err) {
      console.log("连接失败" + err);
    } else {
      console.log('连接成功！');
    }
  });
  await db.query('select * from test where id = 2', function (err, res) {
    if (err) throw err;
    if (res) {
      console.log(param)
      param.id = res[0].id;
      param.name = res[0].name;
      console.log(param)
    }
  })
  await ctx.render('index', {param});
  await db.end();
}
