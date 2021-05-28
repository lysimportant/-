window.onload = function () {
  const regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
  const regqq = /^[1-9]\d{4,11}$/;
  const regname = /^[\u4e00-\u9fa5\d]{2,8}$/;
  const regmes = /^\d{6}$/;
  const regpassword = /^[\w-]{6,16}$/;

  const tel = document.querySelector('#tel');
  const qq = document.querySelector('#qq');
  const uname = document.querySelector('#uname');
  const mes = document.querySelector('#mes');
  const password = document.querySelector('#password');
  const surepassword = document.querySelector('#surepassword');
  // var span = tel.nextElementSibling;

  regexp(tel, regtel);
  regexp(qq, regqq);
  regexp(uname, regname);
  regexp(mes, regmes);
  regexp(password, regpassword);

  function regexp(ele, reg) {
    ele.onblur = function () {
      if (reg.test(this.value)) {
        // console.log('Yes');
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确';
        // span.innerHTML = '手机号码正确';
      } else {
        // console.log("No");
        this.nextElementSibling.className = 'errpr';
        this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确,请重新输入';
      }
    };
  }
  surepassword.onblur = function () {
    if (this.value == password.value) {
      this.nextElementSibling.className = 'success';
      this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确';
    } else {
      this.nextElementSibling.className = 'errpr';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码输入不一致，请重新输入';
    }
  };
};
