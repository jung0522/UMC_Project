import { specs} from './6th-UMC_study/config/swagger.js'
import { swaggerUi } from './6th-UMC_study/config/swagger.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testRouter } from './6th-UMC_study/srcs/routes/testRoute.js'
import { memberRouter }from './6th-UMC_study/srcs/routes/memberRouter.js'
import { response } from './6th-UMC_study/config/response.js'




const app = express();
dotenv.config();    // .env 파일 사용 (환경 변수 관리)

app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석

app.use('/',testRouter);

app.use('/api/members',memberRouter)

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
 // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status || errorStatus.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is ready, ${process.env.SERVER_PORT}`);
});
