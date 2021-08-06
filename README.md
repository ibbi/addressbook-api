# Address Book API

Just a silly little api to mimick an address book.

- CORS-ready
- Post whatever data you want, all it manages are the IDs
- Data stored by whatever you put in the `Authorization` header, keep
  your ascii art to yourself
- Data is just in memory, so data resets with the app
- 25% of responses to `GET /contacts/:id` are forced to take at least 1
  second

Requests without an `Authorization` header will read and write to a
public list of contacts. So, if you want your own list, send any string
you want in the header, for example:

```js
ajax({
  url: "https://address-book-lunchclub.herokuapp.com/",
  headers: {
    Authorization: "StayHungry",
  },
});
```

## GET /contacts

Returns all contacts, there are a few by default

Example request:

```js
$.getJSON("https://address-book-lunchclub.herokuapp.com/contacts");
```

Example response:

```js
{
  contacts: [
    {
      id: 1,
      first: "Ryan",
      last: "Florence",
    },
  ];
}
```

## POST /contacts

Creates a new contact.

Example Request:

```js
$.post("https://address-book-lunchclub.herokuapp.com/contacts", {
  first: "Stanley",
  last: "Stuart",
});
```

Example response:

```js
{
  contact: {
    id: 2,
    first: 'Stanley',
    last: 'Stuart'
  }
}
```

## GET /contacts/:contactId

Returns the contact at id `:contactId`.

Example Request:

```js
$.getJSON("https://address-book-lunchclub.herokuapp.com/contacts/3");
```

Example response:

```js
{
  contact: {
    id: 3,
    first: 'Eric',
    last: 'Berry'
  }
}
```

## PUT /contacts/:contactId

Updates the contact at id `:contactId`.

Example Request:

```js
$.ajax({
  url: "https://address-book-lunchclub.herokuapp.com/contacts/3",
  type: "PUT",
  data: {
    first: "five",
    last: "tanley",
  },
});
```

Example response:

```js
{
  contact: {
    id: 2,
    first: 'five',
    last: 'tanley'
  }
}
```

## DELETE /contacts/:contactId

Destroys the contact at id `:contactId`. Note, you can't destroy
anybody with the id of `jack`.

Example Request:

```js
$.ajax({
  url: "https://address-book-lunchclub.herokuapp.com/contacts/3",
  type: "DELETE",
});
```

Example response:

No content.

## License & Copyright

MIT-Style license.

Copyright &copy; 2013 Ryan Florence
