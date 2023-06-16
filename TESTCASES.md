**Logging into the app**

**Preconditions:**
Visit https://www.saucedemo.com/

**Steps:**
1. Type a valid username into the "Username" field (standard_user); 
2. Type a valid password into the "Password" field (secret_sauce); 
3. Click the "Login" button.

**Expected result:**
User is logged in and the /inventory page is displayed. 

**Adding an item to the cart - Inventory Page**

**Preconditions:**
User is logged in. 

**Steps:**
1. Click the "Add to cart" button on any item; 
2. Verify that the "Add to cart" button has changed to "Remove"; 
3. Visit the cart page by clicking the cart button in the top right corner of the page; 
4. Verify that the item you added to the cart in step 1 is shown on the cart page. 

**Expected result:**
It's possible to add an item to the cart. Item is displayed on the cart page when added to the cart. 

**Removing an item to the cart - Inventory Page**

**Preconditions:**
An item has been added to the cart. 

**Steps:**
1. Visit the /inventory page. Verify that at least 1 item has been added to the cart; 
2. Click the "Remove" button for any of the added items; 
3. Verify that the "Remove" button has changed to "Add to cart" button; 
4. Visit the cart page by clicking the cart button in the top right corner of the page; 
5. Verify that the item you removed in step 3 is not in the cart anymore. 

**Expected result:**
It's possible to remove an item from the cart. Item is no longer displayed on the cart page when removed from the cart. 

**Adding an item to the cart - Item Page**

**Preconditions:**
User is logged in.

**Steps:**
1. Click the image or title of any item on the /inventory page;  
2. Click the "Add to cart" button; 
3. Visit the cart page by clicking the cart button in the top right corner of the page; 
4. Verify that the item you added to the cart in step 2 is shown on the cart page. 

**Expected result:**
It's possible to add an item to the cart. Item is displayed on the cart page when added to the cart. 

**Removing an item from the cart - Item Page**

**Preconditions:**
An item has been added to the cart. 

**Steps:**
1. Click the image or title of any item on the /inventory page that has previously been added to the cart;  
2. Click the "Remove" button; 
3. Visit the cart page by clicking the cart button in the top right corner of the page; 
4. Verify that the item you removed from the cart in step 2 is no longer shown on the cart page. 

**Expected result:**
It's possible to remove an item from the cart. Item is no longer displayed on the cart page when removed from the cart. 

**Sorting - Price(low to high)**

**Preconditions:**
User is logged in

**Steps:**
1. Verify that it's possible to open the sorting menu by clicking the sorting drop-down in the top right corner of the page; 
2. Verify that 4 sorting options are displayed (A to Z, Z to A, Price low to high and Price high to low); 
3. Click the "Price(low to high)" option; 
4. Verify that items have been sorted in ascending order based on the price. 

**Expected result:**
Items can be sorted by a chosen parameter. 

**Sorting - Price(high to low)**

**Preconditions:**
User is logged in. 

**Steps:**
1. Verify that it's possible to open the sorting menu by clicking the sorting drop-down in the top right corner of the page; 
2. Verify that 4 sorting options are displayed (A to Z, Z to A, Price low to high and Price high to low); 
3. Click the "Price(high to low) option; 
4. Verify that items have been sorted in descending order based on the price. 
Expected result:
Items can be sorted by a chosen parameter. 

**Sorting - A to Z**

**Preconditions:**
User is logged in. 

**Steps:**
1. Verify that it's possible to open the sorting menu by clicking the sorting drop-down in the top right corner of the page; 
2. Verify that 4 sorting options are displayed (A to Z, Z to A, Price low to high and Price high to low); 
3. Click the "A to Z" option; 
4. Verify that items have been sorted in alphabetical order. 

**Expected result:**
Items can be sorted by a chosen parameter. 

**Sorting - Z to A**

**Preconditions:**
User is logged in. 

**Steps:**
1. Verify that it's possible to open the sorting menu by clicking the sorting drop-down in the top right corner of the page; 
2. Verify that 4 sorting options are displayed (A to Z, Z to A, Price low to high and Price high to low); 
3. Click the "Z to A" option; 
4. Verify that items have been sorted in reverse alphabetical order. 

**Expected result:**
Items can be sorted by a chosen parameter. 

**Trying to checkout without providing the info**

**Preconditions:**
User is logged in and an item has been added to the cart. 

**Steps:**
1. Click the cart button at the top right corner of the page;
2. Verify that at least 1 item has been added to the cart; 
3. Click the "Checkout" button in the bottom right corner of the page; 
4. On the /checkout-step-one page, don't provide any info; 
5. Click the "Continue" button; 
6. Verify that an error is displayed and that it's not possible to complete the checkout without providing user info. 

**Expected result:**
It's not possible to complete the checkout without providing full user info. 

**Canceling during checkout leads to the inventory page**

**Preconditions:**
User has started the checkout process. 

**Steps:**
1. On the /checkout-step-one page, click the "Cancel" button in the bottom left corner of the page; 
2. Verify that the user has been sent to the /cart page; 
3. Click the "Continue shopping" button in the bottom left corner of the page; 
4. Verify that the user has been sent to the /inventory page. 

**Expected result:**
It's possible to cancel the checkout at any step of the flow. 
