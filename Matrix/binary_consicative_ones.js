function binaryString2(N, str) {
    var maxLength = 0,
        str3;
    for (i = 0; i < N; i++) {
        var str2 = "";
        for (j = i; j < N; j++) {
            str2 = str2 + str[j];
            var count = 0;
            for (m = 0; m < str2.length; m++) {
                if (str2[m] == "1") {
                    count++;
                }
            }
            if (str2.length == count) {
                // console.log('str contain all 1 ', str2);
                if (maxLength < str2.length) {
                    maxLength = str2.length;
                    str3 = str2;
                    // console.log(maxLength)
                }
            }
            //console.log(str2)
        }
    }
    console.log(maxLength, str3);
}
binaryString2(7,
    '1000110');
