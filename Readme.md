```
There are two main ways we can sync data between firebase and angular object: three-way data-binding and array pushing.
For this demo, we want the object to be immediately synchronized, so we will be using three-way data-binding.
The array way is used more for things that don't need immediate syncing like a real-time chat application.
Items (messages) are only synced when a user clicks "Send".
```