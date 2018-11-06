# Proxy to Beamer Rest Api 

![text](https://app.getbeamer.com/images/beamer-logo.png)

This is simple proxy to Beamer Rest API 
It implements simple GET request for posts in Beamer system.

## Getting Started

Download project or clone.

### Prerequisites

* [NodeJs](https://nodejs.org/en/download/package-manager)
* [Requestify](http://ranm8.github.io/requestify/) for HTTP handling
* [Nodemon](https://nodemon.io/) for listening for changes

### Installing

Run `npm install` and define environments:
 * port `(win: SET PORT=3000, linux: export PORT=3000)`, defualt port is set to 3000.
 * beamer api key `(win: SET BEAMER_API_KEY=3000, linux: export BEAMER_API_KEY=3000)`, required.
 * beamer api key `(win: SET REQUIRED=true, linux: export TRUE=3000)`,defualt is true.

 After that run `npm run dev` and you got server listening on port 3000.
 
 Go to your browser and paste this link: `http://localhost:3000/posts` and you can see your posts live.
 
 
## Next steps

Expose entire Beamer API to this proxy. 

## Author

* **[Miroslav Maksimovic](https://github.com/miki995)**
