import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const options = {
    swaggerDefinition : {
        info :{
            title : 'UMC Node study',
            version : '1.0.0',
            description : "API"
        },
        servers : [
            {
                url : 'http://localhost:3000',
            },
        ]
    },
    apis : ['6th-UMC_study/config/swagger.js', '6th-UMC_study/srcs/routes/*.js', '6th-UMC_study/config/swagger/*']
};

export const specs = swaggerJSDoc(options);

export {swaggerUi};