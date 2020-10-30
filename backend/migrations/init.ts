import talks from '../src/dynamodb/table/talks';
import boards from '../src//dynamodb/table/boards';

const init = async () => {
  console.log('start');

  const roomSu = 34;
  for (let i = 1; i <= roomSu; i++) {
    await boards.create({
      bname: '部屋',
      gid: Math.floor(Math.random() * 18),
    });
  }

  for (let i = 1; i <= 500; i++) {
    await talks.create({
      uname: '名無し',
      message: 'こんにちは',
      bid: Math.floor(Math.random() * roomSu) + 1,
    });
  }

  console.log('fin');
};

init();
