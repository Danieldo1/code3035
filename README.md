# [CODE3035: E-Menu for Hookah Lounge Bar  🔗](https://code3035.vercel.app) 
<img src="/public/screenshot/l1.png" width="300"/> <img src="/public/screenshot/l2.png" width="300"/> 
<img src="/public/screenshot/l3.png" width="300"/> <img src="/public/screenshot/l4.png" width="300"/> 
<img src="/public/screenshot/l5.png" width="300"/> 


## About CODE3035 
 **CODE3035** is an innovative e-menu web application specifically crafted for a new and vibrant hookah lounge bar. The project prioritizes a seamless mobile user experience, ensuring that customers can effortlessly browse the menu and make selections from their smartphones and tablets. With the rise of mobile internet usage, **CODE3035** recognizes the importance of a mobile-first design and delivers a responsive and intuitive interface that adapts to various screen sizes and orientations. The heart of **CODE3035** lies in its robust admin panel. This secure backend interface is designed for the lounge bar's staff, enabling authorized personnel to manage the e-menu efficiently. The system supports comprehensive CRUD (Create, Read, Update, Delete) operations, which means that the lounge staff can: 
 -  **Create** new menu items, complete with descriptions, pricing, and images, ensuring that customers have access to the latest offerings. 
 -  **Read** and review the current list of menu items for quality assurance and consistency checks.
  -  **Update** existing menu items to reflect changes in recipes, pricing, or availability, maintaining an accurate and up-to-date menu for patrons. 
  -   **Delete** menu items that are no longer available or have been phased out from the lounge's offerings. 
  
 This high level of control ensures that the e-menu can be dynamically updated in real-time, reflecting any changes immediately on the customer-facing side of the application. Whether it's a seasonal update, a special promotion, or a complete menu overhaul, **CODE3035**  empowers the lounge staff to keep the menu fresh and exciting. The application is built with scalability in mind, allowing for future enhancements such as customer feedback integration, order management, and analytics tracking. **CODE3035**  is not just an e-menu; it's a comprehensive tool designed to elevate the customer experience while streamlining the management process for the hookah lounge bar.
 
Check out the live site here: [code3035.vercel.app](https://code3035.vercel.app)  
## Features  
-  **Mobile-First Design:** The user interface is optimized for mobile devices, providing a smooth and responsive experience for users on the go. 
-  **Admin Panel:** A secure admin panel for managing the menu items, including adding new items, editing existing ones, and removing them as needed.
 -  **CRUD Functionality:** Full create, read, update, and delete capabilities for menu items, allowing for easy management of the e-menu. 
 -  **Dynamic Content:** Real-time updates to the menu as admin changes are made, ensuring customers always see the latest offerings. 
 -  **User Authentication:** Integration with NextAuth for secure login to the admin panel. 
 -   **Smooth Animations:** Leveraging Framer Motion to enhance the user interface with engaging animations. 
 -  **Toast Notifications:** Utilizing `react-hot-toast` for user-friendly notifications upon admin actions. 

## Technologies  
-  **Frontend:** React.js, Next.js 
-  **Styling:** CSS with a focus on a mobile-first responsive design 
-  **Animations:** Framer Motion for UI animations 
-  **Notifications:**  `react-hot-toast` for toast notifications 
-  **Authentication:** NextAuth for secure admin login 
-  **Database:** MongoDB for storing menu data 
-  **File Storage:** AWS S3 for storing images and other static assets 
-  **Hosting:** Deployed on Vercel for seamless cloud hosting 

## Getting Started  
To run this project locally, you'll need to have Node.js and npm installed. Follow these steps:

1. Clone the repository:   ```sh
   git clone https://github.com/your-username/CODE3035.git``

2.  Navigate to the project directory:
    `cd CODE3035`
    
3.  Install dependencies:
    `npm install`
    
4.  Start the development server:
    `npm run dev`
    
5.  Open  [http://localhost:3000](http://localhost:3000/)  with your browser to see the result.

6. Create env file with these names:
`MONGODB_URL=
NEXTAUTH_URL=
SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=`

7. Fill them in and you should be bale to use the file properly. Please note route `/login` is to create an entry in DB to make an admin account. Route `/admin ` is to log in to the protected route of the page

## Contributing

We welcome contributions to  `CODE3035`. If you have an idea or suggestion, please open an issue to discuss it, or directly propose your changes through a pull request.

## License

This project is licensed under the MIT License - see the  [LICENSE.md](https://file+.vscode-resource.vscode-cdn.net/Users/Daniel/.vscode/extensions/codeium.codeium-1.7.22/dist/LICENSE)  file for details.

