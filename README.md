## 成果物
https://serverless.itsumen.com

※アタックしてクラウド死を狙う奴が出てくるからバックエンドは格安のVPSを使っている。

## ローカル開発環境セットアップ

Javaをインストールしておく

```bash
$ git clone https://github.com/yuzuru2/aws_serverless_framework.git serverless
$ cd serverless

#フロントエンド起動
$ cd frontend
$ npm i
$ npm run dev

#バックエンド起動
$ cd backend
$ npm i
$ npx sls dynamodb install
$ npm run dev

#初期データを入れたい場合
$ cd backend
$ npm run init
```

## 使用ライブラリ周り

### フロント

- Next.js
- React
- Redux toolkit
- Bootstrap5
- react-js-pagination

### バックエンド

- ServerlessFramework
- API Gateway
- Lambda
- DynamoDB
- DynamoDB Local
- TypeScript
- Express

## テーブル

### boards
|  物理名  |  論理名  |  型  |  備考  |
| ---- | ---- | ---- |  ---  | 
|  dummy  |  dummy |  文字列  |  PK  | 
|  bid  |  板のID  |   数値  |  SK  |
|  bidNum  |  板の投稿数  |  数値  |    |
|  gid  |  ジャンルID  |  数値  |  GSI PK  | 
|  gidNum  |  ジャンル別のナンバー  |  数値  |  GSI SK  |
|  bname  |  板の名前  |  文字列  |    |
|  date  |  作成時間  |  数値  |   |

### talks

|  物理名  |  論理名  |  型  |  備考  |
| ---- | ---- | ---- |  ---  | 
|  bid  |  板のID  |   数値  |  PK  |
|  num  |  板の投稿数  |  数値  |  SK  |
|  uname  |  投稿者名  |  文字列  |    | 
|  message  |  メッセージ  |  文字列  |   |
|  date  |  作成時間  |  数値  |   |

### sequences

|  物理名  |  論理名  |  型  |  備考  |
| ---- | ---- | ---- |  ---  | 
|  sname  |  シーケンス名 |  文字列  |  PK  | 
|  num  | シーケンスナンバー  |   数値  |   |
