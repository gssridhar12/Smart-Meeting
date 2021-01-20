const meetingRooms = {
    "data": {
      "MeetingRooms": [
        {
          "name": "Punjab",
          "floor": 7,
          "building": {
            "name": "Building 8"
          },
          "meetings": [
            {
              "title": "Booked for Interview"
            }
          ]
        },
        {
          "name": "Ganga",
          "floor": 8,
          "building": {
            "name": "Building 8"
          },
          "meetings": [
            {
              "title": "Booked for Interview"
            }
          ]
        }
      ]
    }
  }

  const buildings = {
    "data": {
      "Buildings": [
        {
          "name": "Building 8",
          "meetingRooms": [
            {
              "name": "Punjab",
              "meetings": [
                {
                  "title": "Booked for Interview",
                  "date": "13/02/2019",
                  "startTime": "19:00",
                  "endTime": "20:00"
                }
              ]
            },
            {
              "name": "Ganga",
              "meetings": [
                {
                  "title": "Booked for Interview",
                  "date": "13/02/2019",
                  "startTime": "19:00",
                  "endTime": "20:00"
                }
              ]
            }
          ]
        },
        {
          "name": "Building 4",
          "meetingRooms": []
        },
        {
          "name": "Building 6",
          "meetingRooms": []
        }
      ]
    }
  }

module.exports = {
    meetingRooms,
    buildings
  };
  