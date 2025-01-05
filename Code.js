function initMenu() {

  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Inventory Management System Settings");

  //menu.addItem("Run Script","run");

  //menu.addSeparator();
  var submenu1 = ui.createMenu("Manage Users");
  submenu1.addItem("Add User", "showadduser");
  submenu1.addItem("Delete User", "showdeleteuser");
  menu.addSubMenu(submenu1);

  var submenu2 = ui.createMenu("Manage Items");
  submenu2.addItem("Add New Item(s)", "showaddnewitems");
  submenu2.addItem("Return Item(s)", "showreturnitems");
  submenu2.addItem("Remove Item(s)", "showremoveitems");
  submenu2.addItem("Delete Item(s)", "showdeleteitems");
  menu.addSubMenu(submenu2);

  menu.addToUi();
}

function onOpen() {

  initMenu();
}
function myMacro() {

  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("a1").setValue(new Date());

}

function showMessage(){

  var ui2 = SpreadsheetApp.getUi().prompt("You did it!");
}
// MAIN FUNCTIONS ############################################################################################################
function run() {
  var adduser = HtmlService.createTemplateFromFile("run").evaluate();
  var dialogTitle = "Inventory Management System";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showadduser() {
  var adduser = HtmlService.createTemplateFromFile("adduser").evaluate();
  var dialogTitle = "Add User";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showremoveitems() {
  var adduser = HtmlService.createTemplateFromFile("removeitems").evaluate();
  var dialogTitle = "Remove Item(s)";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showaddnewitems() {
  var adduser = HtmlService.createTemplateFromFile("addnewitems").evaluate();
  var dialogTitle = "Add New Item(s)";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showdeleteuser() {
  var adduser = HtmlService.createTemplateFromFile("deleteuser").evaluate();
  var dialogTitle = "Delete User";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showreturnitems() {
  var adduser = HtmlService.createTemplateFromFile("returnitems").evaluate();
  var dialogTitle = "Return Item(s)";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}
function showdeleteitems() {
  var adduser = HtmlService.createTemplateFromFile("deleteitems").evaluate();
  var dialogTitle = "Delete Item(s)";
  var width = 1000; // Set the width to your desired value (in pixels)
  var height = 600; // Set the height to your desired value (in pixels)
  SpreadsheetApp.getUi().showModalDialog(adduser.setWidth(width).setHeight(height), dialogTitle);
}

// UTILITY FUNCTIONS ############################################################################################################
function appenData(data){
var ws=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
  const first = data.firstname;
  const firstname = first.charAt(0).toUpperCase()+first.slice(1);
  const loc = data.location;
  const location = loc.charAt(0).toUpperCase()+loc.slice(1);
  const mail = data.email;
  const email = mail.charAt(0).toLowerCase()+mail.slice(1);
  const multilastname = data.lastname;
  const lastnames = multilastname.split(" ");
  for (let i = 0; i <lastnames.length; i++){
    lastnames[i] = lastnames[i][0].toUpperCase() + lastnames[i].substr(1);
  }
  ws.appendRow([firstname,lastnames.join(" "),email,location]);
}
function getUsersData() {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
  var data = ws.getRange(2, 1, ws.getLastRow() - 1, 2).getValues(); // Assuming data starts from row 2, columns A and B
  return data;
}
function getUsersDataForRemoveUsers() {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
  var data = ws.getRange(2, 1, ws.getLastRow() - 1, 2).getValues(); // Assuming data starts from row 2, columns A and B
  return data;
}
function removeSelectedUser(userName) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
  var data = ws.getDataRange().getValues();  
  for (var i = 1; i < data.length; i++) {
    var fullName = data[i][0] + ' ' + data[i][1];
    if (fullName === userName) {
      ws.deleteRow(i + 1); // Adding 1 because data array is 0-based and spreadsheet rows are 1-based
      break;
    }
  }
}
function removeAndLogUser(userName) {
  // Get the first and last names
  var names = userName.split(' ');
  var firstName = names[0];
  var lastName = names.slice(1).join(' ');

  // Log the activity to "ActivityLog" sheet with capitalized names
  logActivity("The following user has been deleted:", capitalizeName(firstName + ' ' + lastName));

  // Call the updated function to update the Interface sheet for deletion
  updateInterfaceSheetForDelete(capitalizeName(firstName + ' ' + lastName));

  // Call the original removeSelectedUser function
  removeSelectedUser(userName);
}

function appendItemData(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");

    const itemName = capitalizeFirstLetter(data.itemName);
    const quantity = data.quantity;
    const barcode = data.barcode;
    const purchaseLink = data.purchaseLink;

    ws.appendRow([itemName, barcode, purchaseLink, quantity, quantity]);
}

function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}
function removeQuantity(data) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
  var barcode = data.barcode;
  var quantityToRemove = parseInt(data.quantity);

  var lastRow = ws.getLastRow();
  var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();
  var items = ws.getRange(2, 1, lastRow - 1, 1).getValues(); // Retrieve item names

  for (var i = 0; i < barcodes.length; i++) {
    if (barcodes[i][0] == barcode) {
      var itemName = items[i][0]; // Retrieve item name based on the matching barcode

      var currentQuantity = parseInt(ws.getRange(i + 2, 5).getValue()); // Current quantity in column E (5th column)
      var currentNextColumnValue = parseInt(ws.getRange(i + 2, 6).getValue()) || 0; // Value in the next column (F)

      if (currentQuantity >= quantityToRemove) {
        // Decrease the current quantity
        currentQuantity -= quantityToRemove;
        
        // Increase the next column value (F) by the removed quantity
        currentNextColumnValue += quantityToRemove;

        // Update the cells in the sheet
        ws.getRange(i + 2, 5).setValue(currentQuantity); // Update quantity in column E
        ws.getRange(i + 2, 6).setValue(currentNextColumnValue); // Update next column in column F

        // Return item name along with quantity removed
        return itemName;
      } else {
        // Show a message indicating that there's not enough quantity to remove
        Logger.log("Not enough quantity to remove");
        return null;
      }
    }
  }
  return null; // Return null if no matching barcode is found
}

function deleteQuantity(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
  var barcode = data.barcode;
  var quantityToDelete = parseInt(data.quantity);

  var lastRow = sheet.getLastRow();
  var barcodes = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
  var quantities = sheet.getRange(2, 4, lastRow - 1, 2).getValues();

  for (var i = 0; i < barcodes.length; i++) {
    if (barcodes[i][0] == barcode) {
      var currentQuantity = parseInt(quantities[i][0]);
      var currentQuantitiesDeleted = parseInt(quantities[i][1]);

      if (currentQuantity >= quantityToDelete) {
        currentQuantity -= quantityToDelete;
        currentQuantitiesDeleted -= quantityToDelete;

        sheet.getRange(i + 2, 4).setValue(currentQuantity);
        sheet.getRange(i + 2, 5).setValue(currentQuantitiesDeleted);
      } else {
        // Show a message indicating that there's not enough quantity to delete
        Logger.log("Not enough quantity to delete");
      }
      break;  // Stop looping after finding the barcode
    }
  }
}
function deleteItem(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
    var barcode = data.barcode;
    var quantityToDelete = parseInt(data.quantity);

    var lastRow = ws.getLastRow();
    var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();
    var quantities = ws.getRange(2, 4, lastRow - 1, 1).getValues();
    var quantitiesRemoved = ws.getRange(2, 5, lastRow - 1, 1).getValues();

    for (var i = 0; i < barcodes.length; i++) {
        if (barcodes[i][0] == barcode) {
            var currentQuantity = parseInt(quantities[i][0]);
            var currentQuantitiesRemoved = parseInt(quantitiesRemoved[i][0]);

            if (currentQuantity >= quantityToDelete) {
                currentQuantity -= quantityToDelete;
                currentQuantitiesRemoved -= quantityToDelete;

                ws.getRange(i + 2, 4).setValue(currentQuantity);
                ws.getRange(i + 2, 5).setValue(currentQuantitiesRemoved);
            } else {
                // Show a message indicating that there's not enough quantity to remove
                Logger.log("Not enough quantity to remove");
            }
            break;  // Stop looping after finding the barcode
        }
    }
}
function deleteAll(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
    var barcode = data.barcode;

    var lastRow = ws.getLastRow();
    var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();

    for (var i = 0; i < barcodes.length; i++) {
        if (barcodes[i][0] == barcode) {
            // Delete the entire row
            ws.deleteRow(i + 2);
            break;  // Stop looping after finding the barcode
        }
    }
}
function returnQuantity(data) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
  var barcode = data.barcode;
  var quantityToReturn = parseInt(data.quantity);

  var lastRow = ws.getLastRow();
  var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();
  var items = ws.getRange(2, 1, lastRow - 1, 1).getValues(); // Retrieve item names

  for (var i = 0; i < barcodes.length; i++) {
    if (barcodes[i][0] == barcode) {
      var itemName = items[i][0]; // Retrieve item name based on the matching barcode

      var currentQuantity = parseInt(ws.getRange(i + 2, 5).getValue());
      var currentQuantitiesRemoved = parseInt(ws.getRange(i + 2, 6).getValue());

      if (currentQuantitiesRemoved >= quantityToReturn) {
        currentQuantity += quantityToReturn;
        currentQuantitiesRemoved -= quantityToReturn;

        ws.getRange(i + 2, 5).setValue(currentQuantity);
        ws.getRange(i + 2, 6).setValue(currentQuantitiesRemoved);

        // Return item name along with quantity
        return itemName;
      } else {
        // Show a message indicating that there's not enough quantity to return
        Logger.log("Not enough quantity to return");
        return null;
      }
    }
  }
  return null; // Return null if no matching barcode is found
}
function triggerFunction(funcName) {
    if (funcName === "showadduser" || funcName === "showdeleteuser" || funcName === "showaddnewitems" || funcName === "showreturnitems" || funcName === "showremoveitems" || funcName === "showdeleteitems") {
        // Call the corresponding function
        window[funcName]();
        google.script.host.close();  // Close the current modal dialog
    } else {
        // Handle other functions if needed
    }
}

function capitalizeName(name) {
    return name.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

// Modify the addUser function to use capitalizeName for logging
function addUser(data) {
    // Call the utility function to append user data to "Users" sheet
    appendUserData(data);

    // Log the activity to "ActivityLog" sheet with capitalized names
    var fullName = capitalizeName(data.firstname + " " + data.lastname);
    logActivity("The following user has been added:", fullName);
    updateInterfaceSheet(fullName);
}

function updateInterfaceSheet(fullName) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

    // Get the range starting at row 3, column 8 (H), and column 9 (I)
    var logRange = sheet.getRange(3, 8, 20, 2); // Maximum of 20 rows for logging
    var currentData = logRange.getValues(); // Fetch existing log data

    // Add the new log entry at the top
    currentData.unshift([new Date(), "The following user has been added: " + fullName]);

    // Keep only the first 20 entries
    currentData = currentData.slice(0, 20);

    // Clear the log range and write the updated data
    logRange.clearContent();
    sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}


function updateInterfaceSheetForDelete(userName) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

    // Get the range starting at row 3, column 8 (H), and column 9 (I)
    var logRange = sheet.getRange(3, 8, 20, 2); // Maximum of 20 rows for logging
    var currentData = logRange.getValues(); // Fetch existing log data

    // Add the new log entry at the top
    currentData.unshift([new Date(), "The following user has been deleted: " + userName]);

    // Keep only the first 20 entries
    currentData = currentData.slice(0, 20);

    // Clear the log range and write the updated data
    logRange.clearContent();
    sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}


// Add this utility function to append user data to "Users" sheet
function appendUserData(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
    const first = data.firstname;
    const firstname = first.charAt(0).toUpperCase() + first.slice(1);
    const loc = data.location;
    const location = loc.charAt(0).toUpperCase() + loc.slice(1);
    const mail = data.email;
    const email = mail.charAt(0).toLowerCase() + mail.slice(1);
    const multilastname = data.lastname;
    const lastnames = multilastname.split(" ");
    for (let i = 0; i < lastnames.length; i++) {
        lastnames[i] = lastnames[i][0].toUpperCase() + lastnames[i].substr(1);
    }
    ws.appendRow([firstname, lastnames.join(" "), email, location]);
}

// Add this utility function to log activity to "ActivityLog" sheet
function logActivity(message, user) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ActivityLog");
    var now = new Date();
    ws.appendRow([now, message + " " + user]);
}

function updateInterfaceSheetForNewItem(user, quantity, itemName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

  // Retrieve the current data from column H and I, starting from row 3
  var currentData = sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).getValues();

  // Add the new entry at the beginning of the array
  currentData.unshift([new Date(), user + " has added " + quantity + " " + capitalizeName(itemName) + " to the inventory."]);

  // Keep only the first 20 rows of data
  currentData = currentData.slice(0, 20);

  // Clear the existing content in columns H and I, starting from row 3
  sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).clearContent();

  // Set the updated data back into the sheet
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}

function logActivityForNewItem(user, quantity, itemName) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ActivityLog");
  var now = new Date();
  ws.appendRow([now, user + " has added" + " " + quantity + " " + capitalizeName(itemName) + " to the inventory."]);
}

function updateInterfaceSheetForRemove(fullName, quantity, itemName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");
  var lastRow = sheet.getLastRow();

  var currentData = sheet.getRange(3, 8, lastRow - 2, 2).getValues(); // Get existing data starting from row 3

  // Add the new data at the top
  var newEntry = [new Date(), fullName + " has removed " + quantity + " " + itemName + "."];

  // Insert the new entry at the beginning of the data
  currentData.unshift(newEntry);

  // Keep only the first 20 rows
  currentData = currentData.slice(0, 20);

  // Clear existing data and set the updated data
  sheet.getRange(3, 8, lastRow - 2, 2).clearContent();
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}


function updateInterfaceSheetForReturn(fullName, quantity, itemName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");
  var lastRow = sheet.getLastRow();
  sheet.insertRowAfter(lastRow); // Insert a new row at the end

  var currentData = sheet.getRange(3, 8, lastRow - 2, 2).getValues(); // Get existing data starting from row 3

  // Add the new data at the top
  currentData.unshift([new Date(), fullName + " has returned " + quantity + " " + itemName + "."]);

  // Keep only the first 20 rows
  currentData = currentData.slice(0, 20);

  // Clear existing data and set the updated data
  sheet.getRange(3, 8, lastRow - 2, 2).clearContent();
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}

// Add this utility function to log activity for returning items to the ActivityLog sheet
function logActivityForReturn(fullName, quantity, itemName) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ActivityLog");
  var now = new Date();
  ws.appendRow([now, fullName + " has returned " + quantity + " " + itemName + "."]);
}
function updateInterfaceSheetForReturn(fullName, quantity, itemName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

  // Retrieve the current data from column H and I, starting from row 3
  var currentData = sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).getValues();

  // Add the new entry at the beginning of the array
  currentData.unshift([new Date(), fullName + " has returned " + quantity + " " + capitalizeName(itemName) + "."]);

  // Keep only the first 20 rows of data
  currentData = currentData.slice(0, 20);

  // Clear the existing content in columns H and I, starting from row 3
  sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).clearContent();

  // Set the updated data back into the sheet
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}

// Log activity for removing items
function logActivityForRemove(fullName, quantity, itemName) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ActivityLog");
  var now = new Date();
  ws.appendRow([now, fullName + " has removed " + quantity + " " + itemName + "."]);
}

// Log activity for deleting items
function logActivityForDelete(fullName, quantity, barcode) {
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ActivityLog");
  var now = new Date();
  var itemName = getItemName(barcode);
  ws.appendRow([now, fullName + " has deleted " + quantity + " " + itemName + "."]);
}
function updateInterfaceSheetForPermanentDelete(user, quantity, barcode) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

  // Get the item name using the barcode
  var itemName = getItemName(barcode);

  // Retrieve the current data from column H and I, starting from row 3
  var currentData = sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).getValues();

  // Add the new entry at the beginning of the array
  currentData.unshift([new Date(), user + " has permanently deleted " + quantity + " " + capitalizeName(itemName) + "."]);

  // Keep only the first 20 rows of data
  currentData = currentData.slice(0, 20);

  // Clear the existing content in columns H and I, starting from row 3
  sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).clearContent();

  // Set the updated data back into the sheet
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}

function updateInterfaceSheetForPermanentDeleteAll(user, barcode) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface");

  // Get the item name using the barcode
  var itemName = getItemName(barcode);

  // Retrieve the current data from column H and I, starting from row 3
  var currentData = sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).getValues();

  // Add the new entry at the beginning of the array
  currentData.unshift([new Date(), user + " has permanently deleted ALL " + capitalizeName(itemName) + "."]);

  // Keep only the first 20 rows of data
  currentData = currentData.slice(0, 20);

  // Clear the existing content in columns H and I, starting from row 3
  sheet.getRange(3, 8, sheet.getLastRow() - 2, 2).clearContent();

  // Set the updated data back into the sheet
  sheet.getRange(3, 8, currentData.length, 2).setValues(currentData);
}

function deleteItem(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
    var barcode = data.barcode;
    var quantityToDelete = parseInt(data.quantity);

    var lastRow = ws.getLastRow();
    var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();
    var quantities = ws.getRange(2, 4, lastRow - 1, 1).getValues();
    var quantitiesRemoved = ws.getRange(2, 5, lastRow - 1, 1).getValues();

    for (var i = 0; i < barcodes.length; i++) {
        if (barcodes[i][0] == barcode) {
            var currentQuantity = parseInt(quantities[i][0]);
            var currentQuantitiesRemoved = parseInt(quantitiesRemoved[i][0]);

            if (currentQuantity >= quantityToDelete) {
                currentQuantity -= quantityToDelete;
                currentQuantitiesRemoved += quantityToDelete; // Increment quantitiesRemoved

                ws.getRange(i + 2, 4).setValue(currentQuantity);
                ws.getRange(i + 2, 5).setValue(currentQuantitiesRemoved);

                // Get the user's full name for logging
                var userName = data.user;
                // Log activity to Interface and ActivityLog sheets
                updateInterfaceSheetForPermanentDelete(userName, quantityToDelete, barcode);
                logActivityForDelete(userName, quantityToDelete, barcode);

                break; // Stop looping after finding the barcode
            } else {
                // Show a message indicating that there's not enough quantity to remove
                Logger.log("Not enough quantity to remove");
            }
        }
    }
}

function deleteAll(data) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
    var barcode = data.barcode;

    var lastRow = ws.getLastRow();
    var barcodes = ws.getRange(2, 2, lastRow - 1, 1).getValues();

    for (var i = 0; i < barcodes.length; i++) {
        if (barcodes[i][0] == barcode) {
            // Increment quantitiesRemoved for all matching items
            var quantitiesRemoved = ws.getRange(i + 2, 5).getValue();
            ws.getRange(i + 2, 5).setValue(quantitiesRemoved + parseInt(data.user));

            // Log activity to Interface and ActivityLog sheets
            updateInterfaceSheetForPermanentDeleteAll(data.user, barcode);
            logActivityForDelete(data.user, 'ALL', barcode);

            // Delete the entire row
            ws.deleteRow(i + 2);
            break; // Stop looping after finding the barcode
        }
    }
}

function getItemName(barcode) {
    var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Items");
    var data = ws.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
        if (data[i][1] == barcode) { // Assuming barcode is in the second column (index 1)
            return data[i][0]; // Return the item name from the first column (index 0)
        }
    }

    return null; // Return null if barcode is not found
}