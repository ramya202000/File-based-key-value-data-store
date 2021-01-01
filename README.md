<html>
<h3>FILE BASED CRD </h3>
    <body>
    <h3>File-based key-value data store that supports the basic CRD (create, read, and delete)</h3>
    <h4>operations. This data store is meant to be used as a local storage for one single process on one
laptop. The data store is exposed as a library to clients.</h4><br>
    <h3>The data store will support the following functional requirements.</h3>
    <h4>1. It can be initialized using an optional file path. If one is not provided, it will reliably
create itself in a reasonable location on the laptop.<br>
2. A new key-value pair can be added to the data store using the Create operation. The key
is always a string - capped at 32chars. The value is always a JSON object - capped at
16KB.<br>
3. If Create is invoked for an existing key, an appropriate error must be returned.<br>
4. A Read operation on a key can be performed by providing the key, and receiving the
value in response, as a JSON object.<br>
5. A Delete operation can be performed by providing the key.<br>
6. Every key supports setting a Time-To-Live property when it is created. This property is
optional. If provided, it will be evaluated as an integer defining the number of seconds
the key must be retained in the data store. Once the Time-To-Live for a key has expired,
the key will no longer be available for Read or Delete operations.<br>
7. Appropriate error responses are returned to a client.
<br>
<h3>The data store will also support the following non-functional requirements.</h3>
1. The size of the file storing data must never exceed 1GB.<br>
2. More than one client process cannot be allowed to use the same file as a data store at any
given time.<br>
</h4>
    </body>

</html>
