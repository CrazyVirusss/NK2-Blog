/**
 * Created by Slane on 2016/9/29.
 */
import mysql from 'mysql2'
import config from '../../config'

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        console.log("连接失败" + err);
    } else {
        console.log('连接成功！');
    }
});

export default db;