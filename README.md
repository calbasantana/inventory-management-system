IMAGE

# Introduction
This project came about as a means of trying to solve an issue within the physics and chemistry departments at my high school; namely, the issue of inventory management. We often have a large array of tools that are difficult to track when teachers are taking them from a central location, such as the physics closet or the chemicals storage supply closet of the chemistry department.

As a result, I created a spreadsheet on Google Sheets that has an embedded Graphical User Interface (GUI) and uses a barcode scanner to check in and check out items. What follows is a tutorial of the main features of the Google Sheet.

I do recommend having a separate computer with a touchscreen, such as a Raspberry Pi, to run the Google Sheet and connect the barcode scanner to.
# Setting Up
The first thing you need to do to set up the sheet is to download the Complete Inventory System sheet. Then, upload the sheet to Google Drive and open it. Unfortunately, there's still an additional step here and that is to click on File -> Save as Google Sheets; otherwise, the following options do not show.

![Image_2](https://github.com/user-attachments/assets/26f97cc5-d1bf-40f1-abb7-f4c4d1627a4d)

In the new Google Sheet, go over to Extensions -> Apps Script. Here, copy and paste the Code.gs file contents into your Code.gs. Press "Save to Drive" then "Run." You will be greeted with this screen:

![Image_3](https://github.com/user-attachments/assets/97436720-612c-4dd2-a9f4-5bb17853798f)

Review the permissions and advance. We still need to add several more files. Create the following files and keep them empty for now:
1. adduser.html
2. deleteuser.html
3. addnewitems.html
4. removeitems.html
5. returnitems.html
6. deleteitems.html

![Image_4](https://github.com/user-attachments/assets/00ed714f-f6d7-4c13-9a48-982a90a1a4ac)

Once you have created these, add contents of each corresponding file by copying and pasting it from the files here. Make sure to save all the files in the Apps Script.

Now, go back to the Interface page. Click on the top right of each of the six tools and assign the appropriate script (please note, the appropriate scripts are showremoveitems, showaddnewitems, showreturnitems, showdeleteitem, showaddnewuser, and showdeleteuser - since these are GUI versions, I put "show" in front).

![Image_5](https://github.com/user-attachments/assets/d8bf93c0-b279-4d93-bbcb-e8f5379f119b)

As an example, for Return Item(s), I did the following:

![Image_6](https://github.com/user-attachments/assets/8b7e744a-f1a6-4b1d-9ef1-61dd2b7bf2d1)

Now, when you click one of the six buttons, you should be able to engage the appropriate script.

# Tabs
There are four tabs in total: Interface, Items, Users, and ActivityLog. Each tab is pretty self-explanatory.

## Interface

The interface is where you should spend most of the time and where your screen should be by default for users. From here, you can either click using a touchscreen (if your device allows for it) or use a mouse. You will see the options on the left for engaging with the inventory management system and the activity log on the right.

![Image_7](https://github.com/user-attachments/assets/a653aa74-a5bf-4028-b0a7-d0ad8d0b1cf1)


## Items
In the items tab, you will see every item that has been registered as well as the barcode for that item, the purchase link for that item, total quantity, quantity in, quantity out, and percentage available. This is a great place to look if you’re thinking about what items to restock.

![Image_8](https://github.com/user-attachments/assets/c23c282c-ce15-4e93-a77d-c29eef05bb14)


## Users

This is where you will see all of the users registered to check in and check out items. It is important to have all users registered here because it is how you can keep track of who has what items. In particular, if you need an item that there are very few of – like force distance sensors in the physics department – and you see that one teacher has many, then it is easy to contact that teacher to inquire about when they will be done using that item.

![Image_9](https://github.com/user-attachments/assets/314b1f3c-065e-489d-93c0-b209bf641263)


## ActivityLog

Here you can see the recent interactions with the interface. You can see who is checking out what items. It may also be helpful to see historically when some items are checked out (for example, maybe everyone needs scales around December because they’re needed for calculating forces).

![Image_10](https://github.com/user-attachments/assets/c4d862a9-d15a-4253-922a-495b44547ac0)


# Actions

There are a total of six actions available through the interface, each of which we will go over below: adding new items, adding new users, removing an item, returning an item, deleting items, and deleting users.

## Adding New Items

Press on the “Add New Item(s)” from the Interface. You can click with a mouse or using a touchscreen. The way to add an item is pretty self-explanatory. Make sure you include the appropriate barcode. This will be recorded in the activity history.

![Image_11](https://github.com/user-attachments/assets/d3a1f720-0a9d-4b91-9b7a-e09087bdcb8e)


## Adding New Users

Adding a new user is simple. Press on the “Add New User(s)” and enter their details. They will then be available as a user in the dropdown menu to add or take items from the inventory.

![Image_12](https://github.com/user-attachments/assets/ce738141-5db3-46b3-8802-3f37bd5028ce)


## Removing an Item

Click on “Remove Item(s)”. Using the barcode scanner, scan the barcode of the item being removed and then input the quantity and user who is removing. This will be logged as in the activity log.

![Image_13](https://github.com/user-attachments/assets/7b2d4122-95e9-4c6c-b6fc-3d58dca69a3d)


## Returning an Item

Click on “Return Item(s).” Using the barcode scanner, scan the barcode of the item being removed and then input the quantity and user who is returning. This will be logged in the activity log.

![Image_14](https://github.com/user-attachments/assets/a9290841-26df-4455-9606-9a2844a3a3b3)


## Deleting Items

Click on "Delete Item(s)." Using the barcode scanner, scan the barcode of the item being deleted and then input the quantity and user who is deleting the item(s). This will be logged in the activity log.

![Image_15](https://github.com/user-attachments/assets/13a68680-02f7-4f45-8ef8-3ff49b0d2a7c)


## Deleting Users

Click on "Delete User(s)." Select the user to be deleted from the dropdown menu of available users.

![Image_16](https://github.com/user-attachments/assets/6f0c177e-32f1-443e-a07c-948b2458acda)


# Tips
It is highly recommended to do this on a flat surface that is smooth; for example, doing it on a laminated surface seems to work really well.

It is also important to move slowly with the magnet because it does have an uneven magnetic field in the configuration that I have at the moment.
