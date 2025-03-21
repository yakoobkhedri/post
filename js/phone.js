const phoneNumberInput = document.getElementById('phoneNumber');
        const submitButton = document.getElementById('submitButton');

        // فقط اجازه ورود اعداد (فارسی، عربی و انگلیسی)
        phoneNumberInput.addEventListener('input', function() {
            // حذف همه کاراکترهای غیرعددی
            phoneNumberInput.value = phoneNumberInput.value.replace(/[^\u06F0-\u06F90-9٠-٩]/g, '');

            // فعال یا غیرفعال کردن دکمه سابمیت بر اساس طول ورودی
            if (phoneNumberInput.value.length === 11) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });

        // جلوگیری از وارد کردن کاراکترهای غیرعددی با کیبورد
        phoneNumberInput.addEventListener('keydown', function(event) {
            // اجازه دادن به کلیدهای کنترل (مانند Backspace, Delete, Arrow keys)
            if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                return;
            }

            // اگر کاراکتر وارد شده عدد نباشد، از ورود آن جلوگیری کنید
            if (!/[0-9\u06F0-\u06F9٠-٩]/.test(event.key)) {
                event.preventDefault();
            }
        });