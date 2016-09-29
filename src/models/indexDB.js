/**
 * Created by Slane on 2016/9/29.
 */
import db from './utils/db'

let data = {
    title:'koa2 title',
    id:'',
    name:''
}

db.query('select * from test where id = 2', function (err, res) {
  if (err) throw err;
  if (res) {
    console.log(data)
    data.id = res[0].id;
    data.name = res[0].name;
    console.log(data);
  }
})

export default data;