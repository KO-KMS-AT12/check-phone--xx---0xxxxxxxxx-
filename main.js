function check(str) {
    let regexp = /^(\()?\d{2}(\))?-(\()?[0]{1}?\d{9}(\))?/;
    if (regexp.test(str)) console.log('So dien thoai hop le');
    else console.log('So dien thoai khong hop le');
}

check('(84)-(0423365957)');
check('(a8)-(2222222222)');
