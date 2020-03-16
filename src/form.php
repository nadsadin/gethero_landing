<?php
if(isset($_POST['phone'],$_POST['company'], $_POST['fullname'],$_POST['email'])){
    $to = 'v.chernov@ideegroup.ru';
    $subject = 'Предзаказ с сайта gethero.space';
    $message = '
        <html>
        <head>
          <title>Заявка с сайта gethero.space</title>
        </head>
        <body>
          <p>Имя '.$_POST['fullname'].'</p>
          <p>Компания '.$_POST['company'].'</p>
          <p>Город '.$_POST['city'].'</p>
          <p>Email '.$_POST['email'].'</p>
          <p>Телефон '.$_POST['phone'].'</p>
        </body>
        </html>
    ';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: info@gethero.space' . "\r\n";
    if(mail($to, $subject, $message,  $headers)){
        echo '
        <h4 class="text-success">Ваш запрос отправлен!</h4>
        <p>Мы скоро с Вами свяжемся.</p>';
    }else{
        echo '<h4 class="text-danger">Что-то пошло не так.</h4> <p>Попробуйте повторить запрос позже.</p>';
    }
}else{
    echo '<h4 class="text-danger">Обязательные поля не заполнены.</h4> <p>Заполните обязательные поля и отправьте форму снова.</p>';
}