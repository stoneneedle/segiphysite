# segiphysite

## Overview
Web site with a search engine using Giphy's API, a demonstration of API calls using JS fetch() (initially a demonstration of AJAX/jQuery, but as this is moving toward deprecation, fetch() was chosen). This project was undertaken for educational purposes as part of the Hofstra Quickstart web development bootcamp.

The live version may be found at [GIPHY SE Site](https://stoneneedle.github.io/segiphysite).

## Usage
There is one search panel on the site. It uses Giphy's search API endpoint to return results to the user, a GIF image based on the query supplied. This demonstrates basic JavaScript knowledge and use of the fetch() function in modern JS.

## Technologies Used
This project utilizes front-end JS, HTML, and CSS. The project uses Bootstrap 5 to style and place elements. As this is a prototype that does not demonstrate bundling/more advanced JS technologies, CDNs are used (in a development version, these files would be integrated into the project itself).

## Ideas for Future Improvement
The following ideas represent a possible trajectory for this project:

1. Login system: Users could login, save the GIF bundles that they create.
1. Trending/translate endpoints integration: The website could use Giphy's additional endpoints, the trending endpoint used for currently trending GIF stickers, the translate one being used to turn words or phrases into GIF images using what Giphy (n.d.) describes as its "special sauce" algorithm.
1. Chat/texting: Users could send text chats to each other with these, or the interface could itself mod an existing app, such as Discord or WhatsApp (Discord, for example, has already integrated Tenor, a similar service to Giphy, according to Droplr, 2020)

## User Stories
As a social media savant, I want to choose any GIF related to the current context of my conversation instantly, so that I can make my friends laugh hard.

As a content manager, I want to enable integrated Giphy functionality, so that I can promote my website to prospective clients.

## Wireframes

### Wireframe 1 (Index)
![Wireframe 1](https://github.com/stoneneedle/segiphysite/blob/main/img/SEGiphySite.drawio.png?raw=true "SE Giphy Site Index")

## References
Droplr. (2020). "How to Use Discord GIFs." Retrieved February 11, 2022, from https://droplr.com/how-to/productivity-tools/how-to-use-gifs-on-discord/.

Giphy. (n.d.). "GIPHY Developers." Retrieved February 11, 2022, from https://developers.giphy.com/docs/api/endpoint.
