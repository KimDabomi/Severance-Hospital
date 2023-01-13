/*
 * @ File name: LoginController.js
 * @ Author: 김다보미(cdabomi60@gmail.com)
 * @ Last Update: 2023-01-13 15:40
 * @ Description: 로그인 컨트롤러
 */

const express = require("express");
const logger = require("../helper/LogHelper");

module.exports = (() => {
  const router = express.Router();

  router.post("/api/login", (req, res, next) => {
    const id = req.body.userid;
    const pw = req.body.userpw;

    logger.debug("id=" + id);
    logger.debug("pw=" + pw);

    let login_ok = false;
    if (id == "node" && pw == "1234") {
      logger.debug("로그인 성공");
      login_ok = true;
    }

    let result_code = null;
    let result_msg = null;

    if (login_ok) {
      req.session.userid = id;
      req.session.userpw = pw;
      result_code = 200;
      result_msg = "ok";
    } else {
      result_code = 403;
      result_msg = "fail";
    }
    const json = { rt: result_msg };
    res.status(result_code).send(json);
  });

  return router;
})();
