<div align="center">
<img src="https://git.main.ecp:5298/pipeline_badge?name=messengerapi&branch=devel">
</div>

# Awesome MessengerAPI

> Набор инструментов для использования приложения MessangerAPI

## Оглавление

---

- [Встроенный метод "Who am i"](#встроенный-метод-who-am-i)
- [Комнаты чата](#управление-комнатами-чата)
  - [Создание комнаты](#создание-комнаты)
  - [Удаление комнаты](#удаление-комнаты)
  - [Обновление данных комнаты](#обновление-данных-комнаты)
  - [Просмотр комнат доступных пользователю](#просмотр-комнат-доступных-пользователю)
  - [Просмотр информации о комнате](#просмотр-информации-о-комнате)
  - [Добавление пользователя в комнату](#добавление-пользователя-в-комнату)
  - [Удаление пользователя из комнаты](#удаление-пользователя-из-комнаты)
  - [Блокировка комнаты](#блокировка-комнаты)
  - [Просмотр количества непрочитанных сообщений пользователя](#просмотр-количества-непрочитанных-сообщений-пользователя)
- [Сообщения](#сообщения)
  - [Создание сообщения](#создание-сообщения)
  - [Просмотр всех сообщений пользователя](#просмотр-всех-сообщений-пользователя)
  - [Удаление сообщения](#удаление-сообщения)
  - [Обновление данных сообщения](#обновление-данных-сообщения)
  - [Просмотр сообщений комнаты](#просмотр-сообщений-комнаты)
- [Обмен сообщениями и настройка RabbitMQ](#обмен-сообщениями-и-настройка-rabbitmq)
  - [Основные понятия RabbitMQ](#основные-понятия-rabbitmq)
  - [Настройка](#настройка)
  - [Пример подключения](#пример-подключения)
  - [Обработка сообщений](#обработка-сообщений)


## Встроенный метод "Who am i"

`GET` https://ecp-webdev1.main.ecp/messengerapi/who-am-i/  

> Использование данного запроса возвращает информацию о пользователе совершившем запрос в формате:  

    {
        "rus_id": 0000,
        "full_name": "Иванов И. И.",
        "rus_surname": "ИВАНОВ",
        "rus_name": "ИВАН",
        "rus_patronymic": "ИВАНОВИЧ",
        "div_no": 000
    }
- rus_id - соответствует id пользователя Django
- div_no - шифр подразделения пользователя

## Управление комнатами чата

### Создание комнаты

`POST` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/  

> Обязательные данные для создания комнаты отсутствуют.  

В процессе создания комнаты, пользователь создавший её автоматически добавляется в список пользователей
и модераторов комнаты. При этом в теле запроса могут содержаться следующие данные для кастомизации

    - chatroom_uuid (UUIDField) - uuid комнаты чата, при отсутствии в теле запроса генерируется автоматически
    - chatroom_name (CharField) - имя комнаты чата
    - url_to_document (URLField) - ссылка на документ относитель которого создана комната чата
    - is_blocked (BooleanField) - блокировка комнаты чата 
    - user_self_add (BooleanField) - возможность пользователю добавиться в комнату самостоятельно
    - created_from (CharField) - приложение из которого была создана комната чата
    - chatroom_users (FK) - список id пользователей имеющих доступ к комнате

В процессе создания комнаты, пользователь создавший её автоматически добавляется в список пользователей
и модераторов комнаты.


### Удаление комнаты

> Данный метод доступен только группе администраторов чата (Django groups / messenger_admin)

`DELETE` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/{chatroom_uuid}/

Метод переопределён и вместо удаления сообщения, присваивает параметру is_deleted значение True 

### Обновление данных комнаты

> Данный метод доступен только группе администраторов чата (Django groups / messenger_admin)


### Просмотр комнат доступных пользователю

`GET` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/

> Данный запрос возвращает все комнаты чата в которые добавлен пользователь в виде списка. Формат ответа
> соответствует  [просмотру информации о комнате.](#просмотр-информации-о-комнате)


### Просмотр информации о комнате

`GET` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/{chatroom_uuid}/

> Данный запрос возвращает значение только в том случае, если пользователь находится в списке пользователей
> комнаты или комната разрешает самостоятельное добавление пользователя


    {
        "id": 00,
        "creator_info": {
            "rus_id": 0000,
            "full_name": "Иванов И. И.",
            "rus_surname": "ИВАНОВ",
            "rus_name": "ИВАН",
            "rus_patronymic": "ИВАНОВИЧ",
            "div_no": 000
        },
        "unread_messages": 0,
        "chatroom_uuid": "177acf62-ad22-4245-a8b5-b1d384492a50",
        "chatroom_name": "TestRoom1",
        "url_to_document": "",
        "is_blocked": false,
        "user_self_add": false,
        "created_from": "Direct",
        "chatroom_created_by": 000,
        "chatroom_users": [
            000
        ]
    }


### Добавление пользователя в комнату

`POST` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/{chatroom_uuid}/add-user/

> Данный метод доступен только модераторам комнаты (ChatroomUsersModel instance, is_moderator=True) 
> и группе администраторов чата (Django groups / messenger_admin)


В теле запроса могут содержаться следующие параметры в формате JSON:

- user_id (обязательное поле) - id добавляемого пользователя
- is_moderator (необязательное поле) - "true" если необходимо дать пользователю права модератора (default=False)


### Удаление пользователя из комнаты

`POST` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/{chatroom_uuid}/remove-user/

> Данный метод доступен только модераторам комнаты (ChatroomUsersModel instance, is_moderator=True) 
> и группе администраторов чата (Django groups / messenger_admin)

В теле запроса могут содержаться следующие параметры в формате JSON:

- user_id (обязательное поле) - id добавляемого пользователя

### Блокировка комнаты

`POST` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/{chatroom_uuid}/block/

> Данный метод доступен только группе администраторов чата (Django groups / messenger_admin)

> Метод является комбинированным, при отправке запроса открытая комната будет заблокирована,
> при повторной отправке запроса будет открыта вновь.

### Просмотр количества непрочитанных сообщений пользователя

`GET` https://ecp-webdev1.main.ecp/messengerapi/chatrooms/unread/

> Метод возвращает список id комнат и количество непрочитанных сообщений в них,
> для сделавшего запрос пользователя

## Сообщения

### Создание сообщения

`POST` https://ecp-webdev1.main.ecp/messengerapi/messages/

> Обязательным полем является: chatroom

    - chatroom (ForeignKey) - id комнаты чата
    - message_text (CharField) - текст сообщения
    - it_answer_to_user (ForeignKey) - внешний ключ, id пользователя
    - it_answer_to_message_of_user (ForeignKey) - внешний ключ, id сообщения


### Просмотр всех сообщений пользователя

`GET` https://ecp-webdev1.main.ecp/messengerapi/messages/

>Формат ответа

    {
        "id": 000,
        "author_info": {
            "rus_id": 000,
            "full_name": "Иванов И. И.",
            "rus_surname": "ИВАНОВ",
            "rus_name": "ИВАН",
            "rus_patronymic": "ИВАНОВИЧ",
            "div_no": 000
        },
        "it_answer_to_user_info": null,
        "it_answer_to_message_of_user_info": null,
        "message_text": "Some text",
        "post_created": "2023-12-11T12:55:54.131330+05:00",
        "post_edited": null,
        "is_deleted": false,
        "created_by": 000,
        "it_answer_to_user": null,
        "it_answer_to_message_of_user": null,
        "chatroom": 10
    },

### Просмотр сообщений комнаты

`GET` https://ecp-webdev1.main.ecp/messengerapi/messages/{chatroom_uuid}/

>Формат ответа соответствует указанному при [просмотре всех сообщений пользователся](#просмотр-всех-сообщений-пользователя)


### Удаление сообщения

> Данный метод доступен только группе администраторов чата (Django groups / messenger_admin)

`DELETE`https://ecp-webdev1.main.ecp/messengerapi/messages/{message_id}/

Метод переопределён и вместо удаления сообщения, присваивает параметру is_deleted значение True 

### Обновление данных сообщения

> Данный метод доступен только группе администраторов чата (Django groups / messenger_admin)

### Просмотр сообщений комнаты

`GET` https://ecp-webdev1.main.ecp/messengerapi/messages/{chatroom_uuid}/

## Обмен сообщениями и настройка RabbitMQ

### Основные понятия RabbitMQ
Для обеспечения функционала мгновенного оповещения пользователей о событиях в MessengerAPI реализована поддержка брокера
сообщений RabbitMQ. RabbitMQ — распределённый и горизонтально масштабируемый брокер сообщений. Его устройство можно 
описать так:

- **Publisher** *(далее: Поставщик)* - который отправляет сообщения;
- **Exchange** *(далее: Обменник)* - где хранятся сообщения;
- **Consumers** *(далее: Подписчики)* - которые выступают получателями сообщений.

RabbitMQ передаёт сообщения между поставщиками и подписчиками через очереди. Сообщения содержат информацию о событиях
MessengerAPI.
### Настройка

>MessengerAPI использует обмен Routing типа 'direct' с использованием Routing keys и временой очередью.
> 
>![python-four.png](src/python-four.png)

**Exchanges:**
- ***"new_message_in_chatroom"*** - для оповещения о новых сообщениях в комнате чата;
- ***"new_user_in_chatroom"*** - для оповещения о новом потзователе в комнате чата;
- ***"remove_user_from_chatroom"*** - для оповещения о удалении пользователя из комнаты чата.

**Routing keys:**   

В роли routing_keys для любого обменника MessengerAPI используется строковое представление UUID *(str(chatroom_uuid))* 
комнат чата к которым пользователь имеет доступ.

### Пример подключения
> Допустим необходимо подключение пользователя к обменнику **"new_message_in_chatroom"** и отслеживать появление новых
> сообщений ко всем комнатам чата из списка **chatroom_uuids** *(Python example)*   

**1. Объявление обменника:**   
*channel.exchange_declare(exchange='new_message_in_chatroom', exchange_type='direct')*   

**2. Объявление очереди:**   
*channel.queue_declare(queue='', exclusive=True)*   

**3. Связывание очереди с каждым routing key из списка chatroom_uuids:**   
*map(lambda chatroom_uuid: channel.queue_bind(exchange, queue_name, chatroom_uuid), chatroms_uuid)*

### Обработка сообщений
Обменник "new_message_in_chatroom" в body сообщения содержит строку в формате JSON с сериализованными данными
в формате [сообщения.](#просмотр-всех-сообщений-пользователя)   

Обменники "new_user_in_chatroom" и "remove_user_from_chatroom" в body сообщения содержит строку в формате JSON с сериализованными данными
в формате [информации о комнате чата.](#просмотр-информации-о-комнате)