<?php
/**
 * Created by PhpStorm.
 * User: suedar
 * Date: 2019-01-30
 * Time: 10:25
 */
// 设置本地时间
date_default_timezone_set('Asia/Shanghai');

// 获取上次登陆的时间
// 通过写文件的方式 可能会不可行 请测试一下
function getLastLoginDate() {
    $curDate = date('D F d H:i:s');
    $lastDate = $curDate;

    $lastLoginFile = fopen("lastLogin.txt", "w") or die("Unable to open file!");

    if(filesize("lastLogin.txt") != 0) {
        $lastDate = fgets($lastLoginFile);
    }

    fwrite($lastLoginFile, $curDate); // 该操作会覆盖文件

    fclose($lastLoginFile);
    return $lastDate;
}


// 获取主机名和用户名
$initData = array(
    "hostname" => gethostname(),
    "username" => get_current_user()
);

$initData["lastDate"] = getLastLoginDate();

//var_dump(json_encode($initData));
echo json_encode($initData);

?>