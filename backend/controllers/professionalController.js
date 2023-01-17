const data = {   
    "_id": {
      "$oid": "621fe1f527d68ebb24438395"
    },
    "professionalName": "Parker Mortensen",
    "nameLink": {
      "firstName": "Parker",
      "url": "https://github.com/ParaguaySnowman"
    },
    "firstName": "Parker",
    "primaryDescription": "Backend Web Development Student",
    "workDescription1": "Student",
    "workDescription2": "Technical Support Agent",
    "linkTitleText": "Check out his work below",
    "linkedInLink": {
      "link": "https://www.linkedin.com/in/parkerbmortensen/",
      "text": "LinkedIn"
    },
    "githubLink": {
      "link": "https://github.com/ParaguaySnowman",
      "text": "GitHub"
    },
    "contactText": "We do more when we do it together."
};

exports.getData = (req, res, next) => {
    
    res.status(200).json(data);
};
