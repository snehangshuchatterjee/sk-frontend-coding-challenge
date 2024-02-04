## Progress

### Optimization strategies

- There can be a huge number of comments depending upon the thread being discussed, hence implementing a pagination on the backend so that only a fixed number of comments are displayed would optimize the network call 
- There can be a limit on the comment size (X style; although depends on the requirements)
- We can have a web socket based implementation so that if there is a new comment in an existing thread, it gets displayed on user submit
- Currently, I have not displayed a child comment in the hierarchy, rather it would be a new comment at the bottom. However, with more time, ti can be designed in such a way that a child comment appears on the same level, not in the bottom

### Reply beyond the given limit

- We can style it in such a way that the comments can take up a bigger margin, but aesthetically there should be a limit to the number of levels as it wont look too good to have a lot of levels