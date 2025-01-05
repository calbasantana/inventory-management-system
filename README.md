![Image_1](https://github.com/user-attachments/assets/d6d343a5-4c1e-407d-a6c2-29e0284c7360)

# Introduction
This project came about as a means of trying to solve an issue within the physics and chemistry departments at my high school; namely, the issue of inventory management. We often have a large array of tools that are difficult to track when teachers are taking them from a central location, such as the physics closet or the chemicals storage supply closet of the chemistry department.

As a result, I created a spreadsheet on Google Sheets that has an embedded Graphical User Interface (GUI) and uses a barcode scanner to check in and check out items. As I worked on this, I was met with a lot of difficult hurdles, so I relied on AI to help me go through some of those hurdles.

What follows is a tutorial of the main features of the Google Sheet.

I do recommend having a separate computer with a touchscreen, such as a Raspberry Pi, to run the Google Sheet and connect the barcode scanner to.
# Setting Up
The first thing you need to do to set up the sheet is to download the Complete Inventory System sheet. Then, upload the sheet to Google Drive and open it. Unfortunately, there's still an additional step here and that is to click on File -> Save as Google Sheets; otherwise, the following options do not show.

![Image_2](https://github.com/user-attachments/assets/36bdad4b-0951-4ea5-8e1d-989df6cb6693)

In the new Google Sheet, go over to Extensions -> Apps Script. Here, copy and paste the Code.js file contents into your Code.gs. Press "Save to Drive" then "Run." You will be greeted with this screen:

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

## Cleaning Up

To make things look pretty, I highly recommend deleting the white boxes surrounding the main interfaces. For example, columns J-Z and rows 23-1000 in the Interface sheet. I did this prior to taking screenshots for the sheets that follow.

# Sheets
There are four sheets in total: Interface, Items, Users, and ActivityLog. Each tab is pretty self-explanatory.

## Interface

The interface is where you should spend most of the time and where your screen should be by default for users. From here, you can either click using a touchscreen (if your device allows for it) or use a mouse. You will see the options on the left for engaging with the inventory management system and the activity log on the right.

![Image_7](https://github.com/user-attachments/assets/8773a607-61c2-4f6f-ad9e-37d0e340723f)


## Items
In the items tab, you will see every item that has been registered as well as the barcode for that item, the purchase link for that item, total quantity, quantity in, and quantity out. This is a great place to look if you’re thinking about what items to restock.

![Image_8](https://github.com/user-attachments/assets/9ded62a7-e3a1-43fe-a7f2-553f59f619c4)


## Users

This is where you will see all of the users registered to check in and check out items. It is important to have all users registered here because it is how you can keep track of who has what items. In particular, if you need an item that there are very few of – like force distance sensors in the physics department – and you see that one teacher has many, then it is easy to contact that teacher to inquire about when they will be done using that item.

![Image_9](https://github.com/user-attachments/assets/683cde4c-3ee0-47b2-b890-0c0845298006)


## ActivityLog

Here you can see the recent interactions with the interface. You can see who is checking out what items. It may also be helpful to see historically when some items are checked out (for example, maybe everyone needs scales around December because they’re needed for calculating forces).

![Image_10](https://github.com/user-attachments/assets/96aa7b6d-e098-4146-a9c8-d234b65a405e)


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

# Hardware

I have only made the software or system itself. However, the hardware is where it can get tricky. The easiest thing to get is a barcode scanner and connecting it to a computer on which the spreadsheet inventory system will run. I recommend something like the following:

NADAMOO Wireless Barcode Scanner with USB Cradle Charging Base 328Ft Long Transmission Handheld 1D Cordless Laser Barcode Reader Portable Bar Code Scanning for Retail Supermaket Warehouse - for $54.99 from: https://www.amazon.com/dp/B06Y2X5HVP/?coliid=I1FH16858D7FF1&colid=1JWCH8PLFICLN&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it

You will also need something to create a barcode label to place on items for easy scanning. There are a ton of affordable options on the market, such as the following.

Phomemo M110 Label Makers - Barcode Label Printer Bluetooth Portable Thermal Printer for Small Business, Address, Logo, Clothing, Mailing, Sticker Printer for Phones & PC, Black  - for 39.99 from: https://www.amazon.com/Phomemo-M110-Label-Maker-Bluetooth-Compatible/dp/B07XXB2MXN/ref=sr_1_4?crid=3W57T236XRDHY&dib=eyJ2IjoiMSJ9.FmpbREQXLHdRIO-xGZpBv7eunP5uPvbw_JOfmrW10z1tSQhdPMU7aySJgAkuhHEkXINX1o2RJz9y4Mp6iWDPnST7ZIKV3Hnnlr2kNVKZXsHDleKb-4MwMPJOK19QPEa7OAzcQk7kXUXs_TtI9HUyv7ZAwSMloyYprN_AgnSP4U99jJBJXCEz2xf0Phacdohw--4JjLZjbN8GuALIzy2uTOuN8L-KKe4xMkzeZus6yWxYlJ_Zx_c0Gz9Q9rt9FfyWnmfBVziG7YI2o4hFMhJOURFdi6whJwGEAuIgf2CYq8nGoGmo9ZwRvystM5pZttnmMhz-2ZpTNMeGpRdwb2x5i86NRNQbWUoQXusXI1OHV4c.uN1qQgvaHpqis0DiLdt_fXO_W8w8GB1op_jKqA27VH4&dib_tag=se&keywords=barcode%2Bmaker&qid=1736113264&s=electronics&sprefix=barcode%2Bmaker%2Celectronics%2C114&sr=1-4&th=1

The hardest part here is creating a barcode for every item and keeping track of it. This inventory system might work best if you're just starting out in a new school and have plenty of time to organize and purchase items and future proof inventory tracking.
# Tips
I recommend trying this out with a small number of items first and making sure that everything works prior to purchasing the barcode scanner and barcode maker. What's great about this solution is that it is highly customizable to your needs, so you can get rid of things you do not need (for example, room number).
