function getName(cb) {
    setTimeout(() => {
        cb("likelion");
    }, 2000); // 2000은 서버와 통신하는 데에 걸린다고 설정한 임의의 값
}

function getAge(cb) {
    setTimeout(()=> {
        cb(13);
    }, 2000);
}

function getAddress(cb) {
    setTimeout(() => {
        cb("Ansan");
    }, 2000);
}