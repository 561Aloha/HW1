# HW1



# Web Development Project 1 - *Local Community Board*

Submitted by: **Your Name Here**

This web app: **Community Event**

Time spent: **36** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x ] **There is a unique theme for events or resources relevant to a specific community**
- [ x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x ] Buttons or links to a related resources are on each card component
- [ x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [x ]  I embedded the calender app in a second set of Events each with their own individual activities

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div style="position: relative; padding-bottom: 50.416666666666664%; height: 0;"><iframe src="https://www.loom.com/embed/c3c12656faef4ec1a33663932f6ecb30?sid=9e0ea452-ddae-4321-ac87-71458df29d5c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Notes

Describe any challenges encountered while building the app.
- I've encountered issues with the calender component. Originally instead of being redirected to a different website, I was going to have custom
- calenders for each of the businesses. However when transitioning the calenders were showing up in their proper place, but I have a challenging time on making the
- calendar component expand to the size of the entire card container. That is how I pivoted to making a singular button that shows the calender

- I also had several issues trying to have the components show up. I tried using DataTypes <Card> until I was able to solve it by declaring a cardData array, and using the mapping function.
- This eventually worked for me

- Last one was making the website responsive and a grid of 3. I wanted to imitate the first project with a layout of three, but most of the css styling was not responsive. Either the image was bigger than the card component, and the only look that was ok in design was making it full width. That is when i realize that I needed to calculate the width in the card component differently. To make it Adjust in size, I used percentages to stay away from px's
## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
