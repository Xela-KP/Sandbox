# Promises

A promise is an **object** that represents the **eventual completion** of some, typically **asynchronous**, **operation**.
The **operation** can be successful (**resolve**) or unsuccessful (**reject**).

The **executor function** is a function passed to the **constructor** of a **promise**.
The **executor function** takes in two arguments: **resolve** and **reject**.
The **resolve** argument of the **executor function** is a reference to an **on-success-callback** that executes if the **operation** is successful.
The **reject** argument of the **executor function** is a reference to an **on-failure-callback** that executes if the **operation** is unsuccessful.
The **on-success-callback** is defined by the user inside the **.then** method of a promise.
The **on-failure-callback** is defined by the user inside the **.catch** method of a promise.

The **body** the **executor function** is the **operation** that can **resolve** or **reject**.
