<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

  <h3 align="center">chesswear</h3>

  <p align="center">
    wear the chess !
    <br />
    <a href="https://github.com/mohitm15/chesswear"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chesswear.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/mohitm15/chesswear/issues">Report Bug</a>
    ·
    <a href="https://github.com/mohitm15/chesswear/issues">Request Feature</a>
  </p>
</div>







<!-- ABOUT THE PROJECT -->
## About The Project

[
                          ![img](https://user-images.githubusercontent.com/35539313/167111062-d63619aa-0d33-4ee9-b8da-fdfadae0ddbd.png)


Chesswear, as its name suggests is an e-commerce platform where you can find a variety of Chess-Inspired items. Not only the conventional ChessBoards, but you can also try different Chess-based Tshirts and Hoddies. Other accessories also include Mugs. Get these products on hand with just a few clicks. We will take care of your order placement to delivery status.

From a technical perspective, this is a web app majorly based on NextJS and data is hosted over Mongo atlas. 
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

The list any major frameworks/libraries used to bootstrap the project are give below

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [JWT](https://jwt.io/)
* [MongoDB](https://www.mongodb.com/)
* [PostMan](https://www.postman.com/)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy of the project and run the following simple steps.


### Prerequisites

Package.json file mentioned the requirements you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

* Any code editor of your choice (VScode preferable )

* Mongo Atlas SignUp


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohitm15/chesswear.git
   ```
2. Install NPM packages and requirements
   ```sh
   npm install or npm i
   ```
   
### Add the environment variables

1. Create a `.env.local` file in root directory.
2. List the `env` file in `.gitignore`.
3. Give the values to the floowing variables
  ```
  MONGO_URI=mongodb+srv://<yourmongo_username>:<your_encoded_password>@cluster0.ttieq.mongodb.net/<database_name>
  NEXT_PUBLIC_HOST=http://localhost:3000
  AES_ENCRYPT=<yoursecret>
  JWT_SECRET=<yoursecret>
  ```
  
 ### Running the code

1. To run the frontend server , go to terminal run
    ```sh
        cd chesswear
    ```

    and then (if you are at root folder)
    ```sh
        npm run dev
    ```
   
    The nextjs server will run on `localhost:/3000`


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Preview

### Live Demo

Live [Link](https://chesswear.vercel.app/) of the website.

### ScreenShots!

![image](https://user-images.githubusercontent.com/35539313/167121928-b330cdb5-998d-49d2-8036-99a73f5d7760.jpg)


![screencapture-localhost-3000-chessboards-2022-05-05-17_10_55](https://user-images.githubusercontent.com/35539313/167121669-7d5917ff-47a9-452d-9616-6db2d3cc6bac.png)


![screencapture-localhost-3000-products-wear-the-chess-think-XL-Yellow-2022-05-05-17_17_50](https://user-images.githubusercontent.com/35539313/167120851-927a0dfc-4368-4616-ab52-19fb1600ae61.png)

![Screenshot from 2022-05-06 16-51-41](https://user-images.githubusercontent.com/35539313/167122366-e36805c9-eda3-4152-a5eb-8af0e15df5cf.png)




![image (1)](https://user-images.githubusercontent.com/35539313/167121729-98352255-716c-482a-8680-4693d507b5ef.jpg)

![image (2)](https://user-images.githubusercontent.com/35539313/167121792-d22eb083-63e3-4753-9667-253404ffa686.jpg)



### GIFs

<div align="center">

  ### Login

![FS5F1I03h1](https://user-images.githubusercontent.com/35539313/167117353-f9fa3efd-6d8b-4e90-8d7d-b284a0b5b8ff.gif)


### Adding Product to Cart

![s195rU0CD9](https://user-images.githubusercontent.com/35539313/167117643-d27c948e-d0c6-4bb4-bf43-005d92bbc7e8.gif)

### Checkout & Order Placement

![s195rU0CD9](https://user-images.githubusercontent.com/35539313/167118135-5254bd3c-3429-49bd-bc5c-7d3b8bbf6490.gif)


### MyOrders & MyAccount

![s195rU0CD9](https://user-images.githubusercontent.com/35539313/167118464-6e61a417-a02b-47d7-a078-fd5e3148006e.gif)

</div>



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- CONTACT -->
## Contact
Your Name -Mohit Maroliya

Project Link: [https://github.com/mohitm15/chesswear](https://github.com/mohitm15/chesswear)

<p align="right">(<a href="#top">back to top</a>)</p>









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

