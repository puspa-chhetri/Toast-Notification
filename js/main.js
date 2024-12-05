const notification = document.querySelector(".notification"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
       timer: 5000,
       success: {
              icon: 'fa-circle-check',
              text: 'Success: This is a success toast.',
       },
       error: {
              icon: 'fa-circle-xmark',
              text: 'Error: This is an error toast',
       },
       warning: {
              icon: 'fa-triangle-exclamation',
              text: 'Warning: This is a warning toast.',
       },
       info: {
              icon: 'fa-circle-info',
              text: 'Info: This is a info toast.',
       }
}

window.removeToast = (toast) => {
       toast.classList.add("hide");
       setTimeout(() => toast.remove(), 500); // Clearing the timeout for the toast
       setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
       // Getting the icon and text for the toast based on the id pass
       const { icon, text } = toastDetails[id];
       const toast = document.createElement("li"); //Creating a new 'li' element for the toast
       toast.className = `toast ${id}`; // Setting the classes for the toast
       toast.innerHTML = ` <div class="column">
                                   <i class="fa-solid ${icon}"></i>
                                   <span>${text}</span>
                            </div>
                            <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
                            notification.appendChild(toast); // Append the toast to the notification ul
                            // Setting a timeout to remove the toast after the specified duration
                          toast.timeoutId = setTimeout(()=> removeToast(toast), toastDetails.timer);
}

// Adding a click event listener to each buttons to create a toast when clicked
buttons.forEach(btn => {
       btn.addEventListener("click", () => createToast(btn.id));
});