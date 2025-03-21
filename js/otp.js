// تایمر دو دقیقه‌ای
let timeLeft = 120; // 120 ثانیه = 2 دقیقه
const timerElement = document.getElementById('timer');
const resendCodeElement = document.getElementById('resend-code');

function startTimer() {
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'ارسال مجدد کد';
      timerElement.removeAttribute('disabled');
    } else {
      timeLeft--;
    }
  }, 1000);
}

// شروع تایمر
startTimer();


// مدیریت اینپوت‌ها
document.querySelectorAll('.otp-input').forEach(input => {
    input.addEventListener('input', function() {
      // فقط اعداد مجاز هستند (انگلیسی، فارسی و عربی)
      this.value = this.value.replace(/[^0-9۰-۹٠-٩]/g, '');
  
      // اگر یک عدد وارد شد، به اینپوت بعدی برو
      if (this.value.length === 1) {
        const nextIndex = parseInt(this.getAttribute('data-index')) + 1;
        const nextInput = document.querySelector(`.otp-input[data-index="${nextIndex}"]`);
        if (nextInput) {
          nextInput.removeAttribute('disabled');
          nextInput.focus();
        }
        this.classList.add('active');
      }
  
      // اگر اینپوت آخر پر شد، دکمه سابمیت را فعال کن
      const lastInput = document.querySelector('.otp-input[data-index="5"]');
      if (lastInput.value.length === 1) {
        document.getElementById('submit-button').removeAttribute('disabled');
      } else {
        document.getElementById('submit-button').setAttribute('disabled', true);
      }
    });
  
    input.addEventListener('keydown', function(e) {
      // اگر دکمه Backspace زده شد و اینپوت خالی است، به اینپوت قبلی برو
      if (e.key === 'Backspace' && this.value.length === 0) {
        const prevIndex = parseInt(this.getAttribute('data-index')) - 1;
        const prevInput = document.querySelector(`.otp-input[data-index="${prevIndex}"]`);
        if (prevInput) {
          // حذف کلاس active از اینپوت فعلی
          this.classList.remove('active');
          // فوکوس به اینپوت قبلی
          prevInput.focus();
          prevInput.value = '';
          prevInput.classList.remove('active');
        }
      }
  
      // اگر اینپوت آخر پاک شد، دکمه سابمیت را غیرفعال کن
      const lastInput = document.querySelector('.otp-input[data-index="5"]');
      if (lastInput.value.length === 0) {
        document.getElementById('submit-button').setAttribute('disabled', true);
      }
    });
  });