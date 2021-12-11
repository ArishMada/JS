bloodTypes = ['A+','A-','B+','B-','AB+','AB-','O+','O-']
const canGiveBlood = function(bloodTypeDonor, bloodTypeRecipient) {
  if (bloodTypes.includes(bloodTypeDonor) && bloodTypes.includes(bloodTypeRecipient)) {
    if (bloodTypeDonor === 'A+' && bloodTypeRecipient === 'AB+' || bloodTypeDonor === 'A+' && bloodTypeRecipient === 'A+') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    }
    else if (bloodTypeDonor === "A-" && bloodTypeRecipient === 'A+' || bloodTypeDonor === "A-" && bloodTypeRecipient === 'A-' || bloodTypeDonor === "A-" && bloodTypeRecipient === 'AB+' || bloodTypeDonor === "A-" && bloodTypeRecipient === 'AB-') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    } 
    else if (bloodTypeDonor === "AB+" && bloodTypeRecipient === "AB+") {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    } 
    else if (bloodTypeDonor === 'AB-' && bloodTypeRecipient === 'AB+' || bloodTypeDonor === 'AB-' && bloodTypeRecipient === 'AB-') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    } 
    else if (bloodTypeDonor === 'B+' && bloodTypeRecipient === 'B+' || bloodTypeDonor === 'B+' && bloodTypeRecipient === 'AB+') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    }
    else if (bloodTypeDonor === 'B-' && bloodTypeRecipient === 'B+' || bloodTypeDonor === 'B-' && bloodTypeRecipient === 'B-' || bloodTypeDonor === 'B-' && bloodTypeRecipient === 'AB+' || bloodTypeDonor === 'B-' && bloodTypeRecipient === 'AB-') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    }
    else if (bloodTypeDonor === 'O+' && bloodTypeRecipient === 'A+' || bloodTypeDonor === 'O+' && bloodTypeRecipient === 'B+' || bloodTypeDonor === 'O+' && bloodTypeRecipient === 'AB+' || bloodTypeDonor === 'O+' && bloodTypeRecipient === 'O+') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    }
    else if (bloodTypeDonor === 'O-' && bloodTypeRecipient === 'A+' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'A-' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'B+' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'B-' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'AB+' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'AB-' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'O+' || bloodTypeDonor === 'O-' && bloodTypeRecipient === 'O-') {
      console.log(`Yes ${bloodTypeDonor} and ${bloodTypeRecipient} are compatible, the donor can give blood to the recipient`)
    } 
    else {
      console.log(`No ${bloodTypeDonor} and ${bloodTypeRecipient} are not compatible, you cannot give blood to the recipient`)
    }
  } else {
    console.log('The input is invalid, the different blood types are A+, A-, B+, B-, AB+, AB-, O+ and O-')
  }
 
}


