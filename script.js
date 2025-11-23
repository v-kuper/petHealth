        // Authentication state
        let isAuthenticated = false;
        let currentUser = null;
        let userEmail = '';
        let resendTimer = null;
        let resendCountdown = 30;

        // Mock data with enhanced nutrition and notification features
        let pets = [
            {
                id: 1,
                name: "Max",
                breed: "Golden Retriever",
                age: 5,
                weight: 32,
                dateOfBirth: "2019-11-15",
                species: "dog",
                microchipNumber: "985112345678901",
                registrationNumber: "RUS-DOG-2019-12345",
                gender: "male",
                neutered: true,
                bloodGroup: "DEA 1.1+",
                colorMarkings: "Golden coat with white chest patch",
                distinctiveFeatures: "Small scar on left ear from previous surgery",
                ownerInfo: {
                    name: "Александр Петров",
                    primaryPhone: "+7 916 123-45-67",
                    secondaryPhone: "+7 495 987-65-43",
                    email: "a.petrov@example.com",
                    address: "г. Москва, ул. Ленина, д. 10, кв. 25",
                    emergencyContact: "Мария Петрова +7 916 765-43-21"
                },
                insuranceInfo: {
                    provider: "АльфаСтрахование Животных",
                    policyNumber: "PETINS-2024-789456"
                },
                preferredVet: {
                    clinic: "Happy Paws Clinic",
                    doctor: "Dr. Ivanov A.P."
                },
                dietaryPreferences: "grain-free",
                nutritionData: {
                    dailyCalorieGoal: 1200,
                    activityLevel: "moderate",
                    lifeStage: "adult",
                    meals: [
                        // November 2025
                        { id: 1, date: "2025-11-22T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "Regular morning feeding" },
                        { id: 2, date: "2025-11-22T18:30", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 3, date: "2025-11-21T08:15", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 4, date: "2025-11-21T14:00", foodName: "Chicken treats", amount: 50, unit: "g", calories: 120, mealType: "treat", notes: "Training session" },
                        { id: 5, date: "2025-11-21T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 6, date: "2025-11-20T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 7, date: "2025-11-20T18:00", foodName: "Royal Canin Adult + vegetables", amount: 220, unit: "g", calories: 400, mealType: "dinner", notes: "Added carrots and green beans" },
                        { id: 8, date: "2025-11-19T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 9, date: "2025-11-19T18:30", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 10, date: "2025-11-18T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 11, date: "2025-11-18T13:00", foodName: "Beef jerky treats", amount: 30, unit: "g", calories: 90, mealType: "treat", notes: "After walk" },
                        { id: 12, date: "2025-11-18T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 13, date: "2025-11-17T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 14, date: "2025-11-17T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 15, date: "2025-11-16T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 16, date: "2025-11-16T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 17, date: "2025-11-15T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 18, date: "2025-11-15T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 19, date: "2025-11-14T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 20, date: "2025-11-14T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 21, date: "2025-11-13T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 22, date: "2025-11-13T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 23, date: "2025-11-12T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 24, date: "2025-11-12T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 25, date: "2025-11-11T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 26, date: "2025-11-11T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 27, date: "2025-11-10T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 28, date: "2025-11-10T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 29, date: "2025-11-09T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 30, date: "2025-11-09T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 31, date: "2025-11-08T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 32, date: "2025-11-08T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 33, date: "2025-11-07T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 34, date: "2025-11-07T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 35, date: "2025-11-06T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 36, date: "2025-11-06T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 37, date: "2025-11-05T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 38, date: "2025-11-05T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 39, date: "2025-11-04T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 40, date: "2025-11-04T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 41, date: "2025-11-03T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 42, date: "2025-11-03T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 43, date: "2025-11-02T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 44, date: "2025-11-02T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 45, date: "2025-11-01T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 46, date: "2025-11-01T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        // October 2025
                        { id: 47, date: "2025-10-31T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 48, date: "2025-10-31T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 49, date: "2025-10-30T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 50, date: "2025-10-30T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 51, date: "2025-10-29T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 52, date: "2025-10-29T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 53, date: "2025-10-28T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 54, date: "2025-10-28T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 55, date: "2025-10-27T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 56, date: "2025-10-27T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 57, date: "2025-10-26T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 58, date: "2025-10-26T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 59, date: "2025-10-25T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 60, date: "2025-10-25T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 61, date: "2025-10-24T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 62, date: "2025-10-24T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 63, date: "2025-10-23T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 64, date: "2025-10-23T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 65, date: "2025-10-22T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 66, date: "2025-10-22T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 67, date: "2025-10-21T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 68, date: "2025-10-21T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 69, date: "2025-10-20T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 70, date: "2025-10-20T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 71, date: "2025-10-19T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 72, date: "2025-10-19T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 73, date: "2025-10-18T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 74, date: "2025-10-18T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 75, date: "2025-10-17T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 76, date: "2025-10-17T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 77, date: "2025-10-16T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 78, date: "2025-10-16T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 79, date: "2025-10-15T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 80, date: "2025-10-15T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 81, date: "2025-10-14T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 82, date: "2025-10-14T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 83, date: "2025-10-13T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 84, date: "2025-10-13T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 85, date: "2025-10-12T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 86, date: "2025-10-12T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 87, date: "2025-10-11T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 88, date: "2025-10-11T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 89, date: "2025-10-10T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 90, date: "2025-10-10T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 91, date: "2025-10-09T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 92, date: "2025-10-09T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 93, date: "2025-10-08T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 94, date: "2025-10-08T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 95, date: "2025-10-07T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 96, date: "2025-10-07T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 97, date: "2025-10-06T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 98, date: "2025-10-06T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 99, date: "2025-10-05T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 100, date: "2025-10-05T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 101, date: "2025-10-04T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 102, date: "2025-10-04T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 103, date: "2025-10-03T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 104, date: "2025-10-03T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 105, date: "2025-10-02T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 106, date: "2025-10-02T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 107, date: "2025-10-01T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 108, date: "2025-10-01T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        // September 2025 - sample days
                        { id: 109, date: "2025-09-30T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 110, date: "2025-09-30T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 111, date: "2025-09-25T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 112, date: "2025-09-25T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 113, date: "2025-09-20T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 114, date: "2025-09-20T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 115, date: "2025-09-15T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 116, date: "2025-09-15T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 117, date: "2025-09-10T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 118, date: "2025-09-10T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 119, date: "2025-09-05T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 120, date: "2025-09-05T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 121, date: "2025-09-01T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 122, date: "2025-09-01T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        // August 2025 - sample days
                        { id: 123, date: "2025-08-30T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 124, date: "2025-08-30T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 125, date: "2025-08-25T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 126, date: "2025-08-25T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 127, date: "2025-08-20T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 128, date: "2025-08-20T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 129, date: "2025-08-15T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 130, date: "2025-08-15T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 131, date: "2025-08-10T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 132, date: "2025-08-10T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 133, date: "2025-08-05T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 134, date: "2025-08-05T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" },
                        { id: 135, date: "2025-08-01T08:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "breakfast", notes: "" },
                        { id: 136, date: "2025-08-01T19:00", foodName: "Royal Canin Adult", amount: 200, unit: "g", calories: 380, mealType: "dinner", notes: "" }
                    ]
                },
                weightGoals: {
                    targetWeight: 30,
                    targetDate: "2026-01-22",
                    goalType: "lose",
                    weeklyRate: 0.5
                },
                weightHistory: [
                    { date: "2025-11-22", weight: 32.0, notes: "Еженедельное взвешивание" },
                    { date: "2025-11-15", weight: 32.2, notes: "Еженедельное взвешивание" },
                    { date: "2025-11-08", weight: 32.5, notes: "Еженедельное взвешивание" },
                    { date: "2025-11-01", weight: 32.8, notes: "Еженедельное взвешивание" },
                    { date: "2025-10-25", weight: 33.0, notes: "Еженедельное взвешивание" },
                    { date: "2025-10-18", weight: 33.2, notes: "Еженедельное взвешивание" },
                    { date: "2025-10-11", weight: 33.5, notes: "Еженедельное взвешивание" },
                    { date: "2025-10-04", weight: 33.7, notes: "Еженедельное взвешивание" },
                    { date: "2025-09-27", weight: 33.9, notes: "Еженедельное взвешивание" },
                    { date: "2025-09-20", weight: 34.1, notes: "Еженедельное взвешивание" },
                    { date: "2025-09-13", weight: 34.3, notes: "Еженедельное взвешивание" },
                    { date: "2025-09-06", weight: 34.5, notes: "Еженедельное взвешивание" },
                    { date: "2025-08-30", weight: 34.7, notes: "Еженедельное взвешивание" },
                    { date: "2025-08-23", weight: 34.9, notes: "Еженедельное взвешивание" },
                    { date: "2025-08-16", weight: 35.1, notes: "Еженедельное взвешивание" },
                    { date: "2025-08-09", weight: 35.2, notes: "Еженедельное взвешивание" },
                    { date: "2025-08-02", weight: 35.4, notes: "Еженедельное взвешивание" },
                    { date: "2025-07-26", weight: 35.5, notes: "Еженедельное взвешивание" },
                    { date: "2025-07-19", weight: 35.6, notes: "Еженедельное взвешивание" },
                    { date: "2025-07-12", weight: 35.7, notes: "Еженедельное взвешивание" },
                    { date: "2025-07-05", weight: 35.8, notes: "Еженедельное взвешивание" },
                    { date: "2025-06-28", weight: 35.9, notes: "Еженедельное взвешивание" },
                    { date: "2025-06-21", weight: 36.0, notes: "Еженедельное взвешивание" },
                    { date: "2025-06-14", weight: 36.1, notes: "Еженедельное взвешивание" },
                    { date: "2025-06-07", weight: 36.2, notes: "Еженедельное взвешивание" },
                    { date: "2025-05-31", weight: 36.3, notes: "Еженедельное взвешивание" },
                    { date: "2025-05-24", weight: 36.4, notes: "Еженедельное взвешивание" },
                    { date: "2025-05-17", weight: 36.5, notes: "Еженедельное взвешивание" },
                    { date: "2025-05-10", weight: 36.6, notes: "Еженедельное взвешивание" },
                    { date: "2025-05-03", weight: 36.7, notes: "Еженедельное взвешивание" }
                ],
                foodRecommendations: [
                    { brand: "Royal Canin Medium Adult", type: "dry", price: "3500-4200 руб", rating: 4.7, ingredients: "Курица, рис, кукуруза, витамины", benefits: "Для поддержания здоровья суставов" },
                    { brand: "Hill's Science Plan Adult", type: "dry", price: "4000-4800 руб", rating: 4.8, ingredients: "Ягненок, рис, овощи, омега-3", benefits: "Здоровье кожи и шерсти" },
                    { brand: "Purina Pro Plan Medium Adult", type: "dry", price: "3200-3900 руб", rating: 4.6, ingredients: "Лосось, рис, пробиотики", benefits: "Поддержка пищеварения" },
                    { brand: "Acana Heritage Adult", type: "dry", price: "5500-6500 руб", rating: 4.9, ingredients: "Свежее мясо, фрукты, овощи", benefits: "Натуральный состав, беззерновой" }
                ],
                notifications: [
                    { id: 1, type: "vaccination", title: "Bordetella Booster Due", description: "Bordetella vaccination due on November 27", dueDate: "2025-11-27T10:00", status: "pending", priority: "high" },
                    { id: 2, type: "medication", title: "Fish Oil Supplement", description: "Time for daily fish oil supplement", dueDate: "2025-11-22T20:00", status: "pending", priority: "medium" },
                    { id: 3, type: "weight", title: "Weekly Weight Check", description: "Time to log Max's weight", dueDate: "2025-11-23T09:00", status: "pending", priority: "low" },
                    { id: 4, type: "appointment", title: "Vet Checkup Scheduled", description: "Regular checkup at Happy Paws Clinic", dueDate: "2025-12-10T14:30", status: "pending", priority: "medium" },
                    { id: 5, type: "medication", title: "Глюкозамин + Хондроитин", description: "Ежедневная добавка для суставов", dueDate: "2025-11-23T08:00", status: "pending", priority: "medium" },
                    { id: 6, type: "appointment", title: "Повторный осмотр", description: "Проверка прогресса по снижению веса", dueDate: "2025-12-20T15:00", status: "pending", priority: "low" },
                    { id: 7, type: "medication", title: "Fish Oil Supplement", description: "Ежедневный приём рыбьего жира", dueDate: "2025-11-24T08:00", status: "pending", priority: "medium" },
                    { id: 8, type: "food", title: "Напоминание о кормлении", description: "Время для утреннего кормления", dueDate: "2025-11-23T08:00", status: "pending", priority: "low" },
                    { id: 9, type: "weight", title: "Еженедельное взвешивание", description: "Записать вес для отслеживания прогресса", dueDate: "2025-11-29T09:00", status: "pending", priority: "low" },
                    { id: 10, type: "appointment", title: "Плановый осмотр", description: "Ежегодный профилактический осмотр", dueDate: "2025-12-05T10:00", status: "pending", priority: "medium" },
                    { id: 11, type: "medication", title: "Глюкозамин + Хондроитин", description: "Ежедневная добавка для суставов", dueDate: "2025-11-24T08:00", status: "pending", priority: "medium" },
                    { id: 12, type: "vaccination", title: "Rabies Booster Reminder", description: "Напоминание о ревакцинации от бешенства через год", dueDate: "2026-10-15T10:00", status: "pending", priority: "low" },
                    { id: 13, type: "food", title: "Напоминание о кормлении", description: "Время для вечернего кормления", dueDate: "2025-11-23T19:00", status: "pending", priority: "low" },
                    { id: 14, type: "appointment", title: "Консультация по питанию", description: "Обсуждение диеты для снижения веса", dueDate: "2025-11-28T14:00", status: "pending", priority: "medium" }
                ],
                notificationSettings: {
                    vaccinations: true,
                    medications: true,
                    appointments: true,
                    weightChecks: true,
                    feedingReminders: false,
                    symptomCheckIns: true,
                    reminderDaysBefore: 3,
                    quietHoursStart: "22:00",
                    quietHoursEnd: "08:00"
                },
                vaccinationStatus: [
                    { vaccine: "Rabies", lastDate: "2025-10-15", nextDue: "2026-10-15", status: "current" },
                    { vaccine: "DHPP", lastDate: "2025-07-12", nextDue: "2026-07-12", status: "current" },
                    { vaccine: "Bordetella", lastDate: "2025-03-20", nextDue: "2025-11-27", status: "due_soon" }
                ],
                testResults: [
                    {
                        id: 1,
                        date: "2025-11-10",
                        clinicName: "Happy Paws Clinic",
                        type: "biochemistry",
                        notes: "Плановый биохимический анализ",
                        values: {
                            glucose: { value: 5.2, unit: "mmol/L", normal: "3.9-6.1", status: "normal" },
                            creatinine: { value: 95, unit: "μmol/L", normal: "44-133", status: "normal" },
                            urea: { value: 6.5, unit: "mmol/L", normal: "3.5-8.9", status: "normal" },
                            alt: { value: 42, unit: "U/L", normal: "10-100", status: "normal" },
                            ast: { value: 38, unit: "U/L", normal: "10-50", status: "normal" },
                            totalProtein: { value: 68, unit: "g/L", normal: "54-78", status: "normal" },
                            albumin: { value: 35, unit: "g/L", normal: "25-40", status: "normal" }
                        }
                    },
                    {
                        id: 2,
                        date: "2025-08-15",
                        clinicName: "Happy Paws Clinic",
                        type: "biochemistry",
                        notes: "Контрольный анализ после лечения",
                        values: {
                            glucose: { value: 5.8, unit: "mmol/L", normal: "3.9-6.1", status: "normal" },
                            creatinine: { value: 110, unit: "μmol/L", normal: "44-133", status: "normal" },
                            urea: { value: 7.2, unit: "mmol/L", normal: "3.5-8.9", status: "normal" },
                            alt: { value: 55, unit: "U/L", normal: "10-100", status: "normal" },
                            ast: { value: 45, unit: "U/L", normal: "10-50", status: "normal" },
                            totalProtein: { value: 70, unit: "g/L", normal: "54-78", status: "normal" },
                            albumin: { value: 38, unit: "g/L", normal: "25-40", status: "normal" }
                        }
                    }
                ],
                medicalRecords: [
                    {
                        id: 1,
                        date: "2025-11-10",
                        clinicName: "Happy Paws Clinic",
                        visitType: "routine_checkup",
                        diagnosis: "Здоров",
                        notes: "Регулярный осмотр. Сердце и лёгкие в норме. Вес стабильный. Рекомендовано продолжить диету для снижения веса.",
                        medications: [],
                        testResultId: 1
                    },
                    {
                        id: 2,
                        date: "2025-10-15",
                        clinicName: "Happy Paws Clinic",
                        visitType: "vaccination",
                        diagnosis: "Ревакцинация",
                        notes: "Введена ревакцинация от бешенства. Побочных эффектов не ожидается. Следующая вакцинация через год.",
                        medications: []
                    },
                    {
                        id: 3,
                        date: "2025-09-20",
                        clinicName: "Emergency Vet Center",
                        visitType: "emergency",
                        diagnosis: "Ушная инфекция",
                        notes: "Инфекция левого уха, назначены антибиотики. Собака трясла головой, были выделения.",
                        medications: [
                            { name: "Амоксициллин", dosage: "500мг", frequency: "Два раза в день", duration: "10 дней" }
                        ]
                    },
                    {
                        id: 4,
                        date: "2025-08-25",
                        clinicName: "Happy Paws Clinic",
                        visitType: "routine_checkup",
                        diagnosis: "Избыточный вес",
                        notes: "Обнаружен избыточный вес. Рекомендована диета и увеличение физической активности. Установлена цель снижения веса до 30 кг.",
                        medications: []
                    },
                    {
                        id: 5,
                        date: "2025-07-12",
                        clinicName: "Happy Paws Clinic",
                        visitType: "vaccination",
                        diagnosis: "Вакцинация DHPP",
                        notes: "Плановая вакцинация DHPP. Перенёс хорошо, без побочных эффектов.",
                        medications: []
                    },
                    {
                        id: 6,
                        date: "2025-06-18",
                        clinicName: "Happy Paws Clinic",
                        visitType: "routine_checkup",
                        diagnosis: "Здоров",
                        notes: "Ежегодный осмотр. Все показатели в норме. Рекомендовано продолжить приём рыбьего жира для суставов.",
                        medications: []
                    },
                    {
                        id: 7,
                        date: "2025-05-22",
                        clinicName: "Happy Paws Clinic",
                        visitType: "dental",
                        diagnosis: "Чистка зубов",
                        notes: "Профессиональная чистка зубов под наркозом. Обнаружен лёгкий зубной камень, удалён. Рекомендована регулярная чистка зубов дома.",
                        medications: []
                    },
                    {
                        id: 8,
                        date: "2025-04-15",
                        clinicName: "Happy Paws Clinic",
                        visitType: "routine_checkup",
                        diagnosis: "Здоров",
                        notes: "Плановый осмотр. Вес 36.5 кг. Рекомендовано следить за питанием.",
                        medications: []
                    },
                    {
                        id: 9,
                        date: "2025-03-20",
                        clinicName: "Happy Paws Clinic",
                        visitType: "vaccination",
                        diagnosis: "Вакцинация Bordetella",
                        notes: "Вакцинация от бордетеллёза. Перенёс хорошо.",
                        medications: []
                    },
                    {
                        id: 10,
                        date: "2025-02-10",
                        clinicName: "Happy Paws Clinic",
                        visitType: "routine_checkup",
                        diagnosis: "Здоров",
                        notes: "Регулярный осмотр. Все показатели в норме. Рекомендовано продолжить приём добавок для суставов.",
                        medications: []
                    }
                ],
                symptoms: [
                    {
                        id: 1,
                        date: "2025-11-08",
                        symptoms: ["lethargy", "loss_of_appetite"],
                        severity: 4,
                        duration: "2 дня",
                        notes: "Казался уставшим, но нормальное поведение восстановилось после отдыха"
                    },
                    {
                        id: 2,
                        date: "2025-10-22",
                        symptoms: ["head_shaking", "ear_discharge"],
                        severity: 7,
                        duration: "3 дня",
                        notes: "Привело к визиту к ветеринару, диагностирована ушная инфекция"
                    },
                    {
                        id: 3,
                        date: "2025-09-15",
                        symptoms: ["limping"],
                        severity: 3,
                        duration: "1 день",
                        notes: "Небольшая хромота на левую переднюю лапу после активной игры. Прошла сама."
                    },
                    {
                        id: 4,
                        date: "2025-08-28",
                        symptoms: ["itching"],
                        severity: 5,
                        duration: "4 дня",
                        notes: "Чесался чаще обычного. Проверили на блох - не обнаружено. Возможно сезонная аллергия."
                    },
                    {
                        id: 5,
                        date: "2025-07-20",
                        symptoms: ["vomiting"],
                        severity: 4,
                        duration: "1 день",
                        notes: "Однократная рвота утром. Возможно съел что-то на прогулке. Больше не повторялось."
                    },
                    {
                        id: 6,
                        date: "2025-06-10",
                        symptoms: ["lethargy"],
                        severity: 3,
                        duration: "1 день",
                        notes: "Был менее активен после долгой прогулки. Нормальное поведение восстановилось на следующий день."
                    },
                    {
                        id: 7,
                        date: "2025-05-25",
                        symptoms: ["loss_of_appetite"],
                        severity: 3,
                        duration: "1 день",
                        notes: "Съел меньше обычного. На следующий день аппетит восстановился."
                    },
                    {
                        id: 8,
                        date: "2025-04-18",
                        symptoms: ["cough"],
                        severity: 4,
                        duration: "2 дня",
                        notes: "Лёгкий кашель. Возможно из-за пыльцы. Прошёл сам."
                    }
                ],
                medications: [
                    { id: 1, name: "Рыбий жир", dosage: "1000мг", frequency: "Раз в день", startDate: "2024-08-01", reason: "Здоровье суставов", status: "active" },
                    { id: 2, name: "Глюкозамин + Хондроитин", dosage: "500мг", frequency: "Раз в день", startDate: "2025-08-25", reason: "Поддержка суставов при артрите", status: "active" },
                    { id: 3, name: "Амоксициллин", dosage: "500мг", frequency: "Два раза в день", startDate: "2025-09-20", endDate: "2025-09-30", reason: "Ушная инфекция", status: "completed" }
                ],
                allergies: ["курица"],
                conditions: ["лёгкий артрит"]
            },
            {
                id: 2,
                name: "Luna",
                breed: "Сиамская кошка",
                age: 3,
                weight: 4.5,
                dateOfBirth: "2021-03-22",
                species: "cat",
                microchipNumber: "985112345678902",
                registrationNumber: "RUS-CAT-2021-67890",
                gender: "female",
                neutered: true,
                bloodGroup: "A",
                colorMarkings: "Seal point with blue eyes",
                distinctiveFeatures: "Distinctive blue eyes, vocal personality",
                ownerInfo: {
                    name: "Александр Петров",
                    primaryPhone: "+7 916 123-45-67",
                    secondaryPhone: "+7 495 987-65-43",
                    email: "a.petrov@example.com",
                    address: "г. Москва, ул. Ленина, д. 10, кв. 25",
                    emergencyContact: "Мария Петрова +7 916 765-43-21"
                },
                insuranceInfo: {
                    provider: "АльфаСтрахование Животных",
                    policyNumber: "PETINS-2024-789457"
                },
                preferredVet: {
                    clinic: "Whisker Care Veterinary",
                    doctor: "Dr. Sokolova E.V."
                },
                dietaryPreferences: "standard",
                nutritionData: {
                    dailyCalorieGoal: 250,
                    activityLevel: "moderate",
                    lifeStage: "adult",
                    meals: [
                        { id: 1, date: "2025-11-22T07:30", foodName: "Whiskas Adult Cat", amount: 80, unit: "g", calories: 120, mealType: "breakfast", notes: "" },
                        { id: 2, date: "2025-11-22T19:00", foodName: "Whiskas Adult Cat", amount: 80, unit: "g", calories: 120, mealType: "dinner", notes: "" },
                        { id: 3, date: "2025-11-21T07:30", foodName: "Whiskas Adult Cat", amount: 80, unit: "g", calories: 120, mealType: "breakfast", notes: "" },
                        { id: 4, date: "2025-11-21T19:00", foodName: "Whiskas Adult Cat", amount: 80, unit: "g", calories: 120, mealType: "dinner", notes: "" },
                        { id: 5, date: "2025-11-20T07:30", foodName: "Whiskas Adult Cat", amount: 75, unit: "g", calories: 115, mealType: "breakfast", notes: "Ate less than usual" }
                    ]
                },
                weightGoals: {
                    targetWeight: 4.5,
                    targetDate: "2026-03-22",
                    goalType: "maintain",
                    weeklyRate: 0
                },
                weightHistory: [
                    { date: "2025-11-22", weight: 4.5 },
                    { date: "2025-10-22", weight: 4.6 },
                    { date: "2025-09-22", weight: 4.5 },
                    { date: "2025-08-22", weight: 4.4 }
                ],
                foodRecommendations: [
                    { brand: "Royal Canin Siamese Adult", type: "dry", price: "1800-2200 руб", rating: 4.8, ingredients: "Птица, рис, таурин", benefits: "Специально для сиамских кошек" },
                    { brand: "Hill's Science Plan Adult", type: "wet", price: "2200-2800 руб", rating: 4.7, ingredients: "Тунец, курица, витамины", benefits: "Здоровье мочевыводящих путей" },
                    { brand: "Purina Pro Plan Delicate", type: "dry", price: "1600-2000 руб", rating: 4.6, ingredients: "Индейка, рис, пробиотики", benefits: "Для чувствительного пищеварения" }
                ],
                notifications: [
                    { id: 1, type: "vaccination", title: "FVRCP Due Soon", description: "FVRCP vaccination due on July 20", dueDate: "2025-07-20T10:00", status: "pending", priority: "medium" },
                    { id: 2, type: "appointment", title: "Dental Checkup", description: "Teeth cleaning appointment", dueDate: "2025-12-15T11:00", status: "pending", priority: "low" },
                    { id: 3, type: "food", title: "Напоминание о кормлении", description: "Время для утреннего кормления Luna", dueDate: "2025-11-23T07:30", status: "pending", priority: "low" },
                    { id: 4, type: "food", title: "Напоминание о кормлении", description: "Время для вечернего кормления", dueDate: "2025-11-23T19:00", status: "pending", priority: "low" },
                    { id: 5, type: "appointment", title: "Плановый осмотр", description: "Ежегодный профилактический осмотр у ветеринара", dueDate: "2025-12-01T10:00", status: "pending", priority: "medium" },
                    { id: 6, type: "vaccination", title: "Rabies Booster Reminder", description: "Напоминание о ревакцинации от бешенства", dueDate: "2025-08-10T10:00", status: "pending", priority: "medium" },
                    { id: 7, type: "weight", title: "Ежемесячное взвешивание", description: "Записать вес для отслеживания", dueDate: "2025-12-22T09:00", status: "pending", priority: "low" },
                    { id: 8, type: "appointment", title: "Консультация по поведению", description: "Обсуждение вокального поведения", dueDate: "2025-11-30T15:00", status: "pending", priority: "low" }
                ],
                notificationSettings: {
                    vaccinations: true,
                    medications: true,
                    appointments: true,
                    weightChecks: false,
                    feedingReminders: true,
                    symptomCheckIns: false,
                    reminderDaysBefore: 5,
                    quietHoursStart: "23:00",
                    quietHoursEnd: "07:00"
                },
                vaccinationStatus: [
                    { vaccine: "Rabies", lastDate: "2024-08-10", nextDue: "2025-08-10", status: "current" },
                    { vaccine: "FVRCP", lastDate: "2024-07-20", nextDue: "2025-07-20", status: "current" }
                ],
                testResults: [],
                medicalRecords: [
                    {
                        id: 1,
                        date: "2024-10-30",
                        clinicName: "Whisker Care Veterinary",
                        visitType: "routine_checkup",
                        diagnosis: "Здорова",
                        notes: "Ежегодный осмотр завершён. Рекомендована чистка зубов.",
                        medications: []
                    }
                ],
                symptoms: [],
                medications: [],
                allergies: [],
                conditions: []
            }
        ];

        let currentPet = null;
        let selectedSeverity = null;
        // Calendar state
        let currentCalendarDate = new Date(2025, 10, 22); // November 22, 2025
        let currentCalendarView = 'month';
        let selectedCalendarPet = 'all';
        // Records filter state
        let currentRecordTypeFilter = 'all';
        
        // Calendar events data
        let calendarEvents = {
            // November 2025
            "2025-11-22": [
                { id: 6, type: "medication", petId: 1, time: "08:00", medication: "Fish Oil", dosage: "1000мг", status: "taken", notes: "" },
                { id: 7, type: "medication", petId: 1, time: "20:00", medication: "Fish Oil", dosage: "1000мг", status: "pending", notes: "" },
                { id: 12, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 32.0 кг" }
            ],
            "2025-11-21": [
                { id: 13, type: "medication", petId: 1, time: "08:00", medication: "Fish Oil", dosage: "1000мг", status: "taken", notes: "" },
                { id: 14, type: "medication", petId: 1, time: "08:00", medication: "Глюкозамин", dosage: "500мг", status: "taken", notes: "" }
            ],
            "2025-11-20": [
                { id: 5, type: "appointment", petId: 1, time: "15:00", duration: 45, clinic: "Emergency Vet", eventType: "emergency", status: "completed", diagnosis: "Инфекция уха", notes: "" }
            ],
            "2025-11-15": [
                { id: 15, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 32.2 кг" }
            ],
            "2025-11-10": [
                { id: 4, type: "appointment", petId: 1, time: "10:00", duration: 60, clinic: "Happy Paws Clinic", eventType: "routine_checkup", status: "completed", diagnosis: "Здоров", notes: "" }
            ],
            "2025-11-08": [
                { id: 3, type: "symptom", petId: 1, time: "all-day", symptoms: ["Вялость", "Потеря аппетита"], severity: 4, notes: "" }
            ],
            "2025-11-01": [
                { id: 16, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 32.8 кг" }
            ],
            "2025-11-27": [
                { id: 8, type: "vaccination", petId: 1, time: "10:00", duration: 30, clinic: "Happy Paws Clinic", vaccine: "Bordetella Booster", status: "scheduled", reminder: "1_day", notes: "Напоминание за 3 дня" }
            ],
            "2025-11-23": [
                { id: 17, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "scheduled", notes: "Еженедельная проверка веса" }
            ],
            // October 2025
            "2025-10-25": [
                { id: 18, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 33.0 кг" }
            ],
            "2025-10-22": [
                { id: 2, type: "symptom", petId: 1, time: "all-day", symptoms: ["Тряска головой", "Выделения из уха"], severity: 7, notes: "Привело к визиту" }
            ],
            "2025-10-18": [
                { id: 19, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 33.2 кг" }
            ],
            "2025-10-15": [
                { id: 1, type: "appointment", petId: 1, time: "14:30", duration: 30, clinic: "Happy Paws Clinic", eventType: "vaccination", vaccine: "Rabies Booster", status: "completed", notes: "" }
            ],
            "2025-10-11": [
                { id: 20, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 33.5 кг" }
            ],
            "2025-10-04": [
                { id: 21, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 33.7 кг" }
            ],
            // September 2025
            "2025-09-30": [
                { id: 22, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 33.9 кг" }
            ],
            "2025-09-20": [
                { id: 23, type: "appointment", petId: 1, time: "16:00", duration: 45, clinic: "Emergency Vet Center", eventType: "emergency", status: "completed", diagnosis: "Ушная инфекция", notes: "Назначены антибиотики" }
            ],
            "2025-09-15": [
                { id: 24, type: "symptom", petId: 1, time: "all-day", symptoms: ["Хромота"], severity: 3, notes: "Небольшая хромота после игры" }
            ],
            "2025-09-13": [
                { id: 25, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 34.1 кг" }
            ],
            "2025-09-06": [
                { id: 26, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 34.5 кг" }
            ],
            // August 2025
            "2025-08-30": [
                { id: 27, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 34.7 кг" }
            ],
            "2025-08-28": [
                { id: 28, type: "symptom", petId: 1, time: "all-day", symptoms: ["Зуд"], severity: 5, notes: "Чесался чаще обычного" }
            ],
            "2025-08-25": [
                { id: 29, type: "appointment", petId: 1, time: "11:00", duration: 60, clinic: "Happy Paws Clinic", eventType: "routine_checkup", status: "completed", diagnosis: "Избыточный вес", notes: "Установлена цель снижения веса" }
            ],
            "2025-08-23": [
                { id: 30, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 34.9 кг" }
            ],
            "2025-08-16": [
                { id: 31, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 35.1 кг" }
            ],
            "2025-08-09": [
                { id: 32, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 35.2 кг" }
            ],
            "2025-08-02": [
                { id: 33, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 35.4 кг" }
            ],
            // July 2025
            "2025-07-26": [
                { id: 34, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 35.5 кг" }
            ],
            "2025-07-20": [
                { id: 35, type: "symptom", petId: 1, time: "all-day", symptoms: ["Рвота"], severity: 4, notes: "Однократная рвота утром" }
            ],
            "2025-07-12": [
                { id: 36, type: "appointment", petId: 1, time: "14:00", duration: 30, clinic: "Happy Paws Clinic", eventType: "vaccination", vaccine: "DHPP", status: "completed", notes: "" }
            ],
            "2025-07-05": [
                { id: 37, type: "weight", petId: 1, time: "09:00", eventType: "weight_check", status: "completed", notes: "Вес: 35.8 кг" }
            ],
            // December 2025 - Future events
            "2025-12-05": [
                { id: 9, type: "appointment", petId: 1, time: "14:00", duration: 30, clinic: "Happy Paws Clinic", eventType: "follow_up", status: "scheduled", reminder: "1_day", notes: "Контроль после лечения уха" }
            ],
            "2025-12-10": [
                { id: 10, type: "appointment", petId: 1, time: "14:30", duration: 60, clinic: "Happy Paws Clinic", eventType: "routine_checkup", status: "scheduled", reminder: "3_days", notes: "Регулярный осмотр" },
                { id: 38, type: "appointment", petId: 2, time: "11:00", duration: 60, clinic: "Whisker Care", eventType: "dental", status: "scheduled", reminder: "3_days", notes: "Чистка зубов" }
            ],
            "2025-12-20": [
                { id: 39, type: "appointment", petId: 1, time: "15:00", duration: 45, clinic: "Happy Paws Clinic", eventType: "routine_checkup", status: "scheduled", reminder: "1_week", notes: "Проверка прогресса по снижению веса" }
            ],
            "2025-12-23": [
                { id: 11, type: "reminder", petId: 1, time: "09:00", eventType: "weight_check", status: "scheduled", notes: "Еженедельная проверка веса" }
            ]
        };
        
        let aiRecommendations = [
            {
                id: 1,
                date: "2025-11-22",
                petId: 1,
                summary: "Общее состояние хорошее",
                status: "positive",
                details: {
                    healthScore: 8,
                    nutrition: "Питание сбалансированное, калории в норме",
                    weight: "Вес стабильный, прогресс к цели",
                    activity: "Достаточная активность",
                    medical: "Все вакцинации актуальны",
                    concerns: [],
                    recommendations: [
                        "Продолжайте текущий режим питания",
                        "Рекомендуется плановый осмотр через месяц",
                        "Следите за регулярностью кормления"
                    ]
                }
            }
        ];

        let scannedDocuments = [
            {
                id: 1,
                petId: 1,
                date: "2025-11-20",
                type: "prescription",
                imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect fill='%23f5f5f5' width='200' height='150'/%3E%3Ctext x='100' y='75' font-family='Arial' font-size='14' fill='%23333' text-anchor='middle'%3EPrescription Document%3C/text%3E%3C/svg%3E",
                aiProcessed: true,
                confidence: 92,
                extractedData: {
                    visitDate: "2025-11-20",
                    clinicName: "Happy Paws Clinic",
                    doctorName: "Dr. Ivanov A.P.",
                    medications: [
                        { name: "Amoxicillin", dosage: "500mg", frequency: "Twice daily (BID)", duration: "10 days", instructions: "Take with food" },
                        { name: "Carprofen", dosage: "75mg", frequency: "Once daily", duration: "5 days", instructions: "Take with food, anti-inflammatory" }
                    ],
                    recommendations: "Keep affected ear dry. Return for follow-up if symptoms persist after treatment. Monitor for side effects including vomiting or diarrhea.",
                    followUpDate: "2025-12-05"
                },
                linkedRecordId: 4
            }
        ];

        const symptomNames = {
            cough: "Кашель",
            vomiting: "Рвота",
            lethargy: "Вялость",
            loss_of_appetite: "Потеря аппетита",
            diarrhea: "Диарея",
            head_shaking: "Тряска головой",
            ear_discharge: "Выделения из ушей",
            limping: "Хромота"
        };

        const visitTypeNames = {
            routine_checkup: "Плановый осмотр",
            vaccination: "Вакцинация",
            surgery: "Операция",
            emergency: "Экстренный визит",
            dental: "Стоматология"
        };

        // Initialize app
        function init() {
            checkAuthentication();
        }

        function checkAuthentication() {
            // For demo: check if user is authenticated
            console.log('Checking authentication, isAuthenticated:', isAuthenticated);
            if (!isAuthenticated) {
                showWelcomeScreen();
            } else {
                showAuthenticatedApp();
            }
        }

        function showWelcomeScreen() {
            console.log('Showing welcome screen');
            
            // Hide all screens
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            
            // Show welcome screen with proper styling
            const welcomeScreen = document.getElementById('welcome-screen');
            welcomeScreen.style.display = 'block';
            welcomeScreen.style.visibility = 'visible';
            welcomeScreen.style.zIndex = '1000';
            welcomeScreen.style.pointerEvents = 'auto';
            welcomeScreen.classList.add('active');
            
            // Hide app UI
            document.getElementById('main-header').style.display = 'none';
            document.getElementById('main-nav').style.display = 'none';
            document.getElementById('fab-quick').style.display = 'none';
            document.getElementById('fab-scan').style.display = 'none';
        }

        function showEmailEntry() {
            console.log('Showing email entry');
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            const emailScreen = document.getElementById('email-entry-screen');
            emailScreen.style.display = 'block';
            emailScreen.style.visibility = 'visible';
            emailScreen.style.zIndex = '1000';
            emailScreen.style.pointerEvents = 'auto';
            emailScreen.classList.add('active');
            setTimeout(() => {
                document.getElementById('email-input').focus();
            }, 100);
        }

        function submitEmail(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value.trim();
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showEmailValidation('Пожалуйста, введите корректный email', false);
                return;
            }
            
            userEmail = email;
            const btn = document.getElementById('email-submit-btn');
            btn.disabled = true;
            btn.innerHTML = '<div class="loading-spinner" style="width: 20px; height: 20px; border-width: 2px; margin: 0 auto;"></div>';
            
            // Simulate API call
            setTimeout(() => {
                console.log('Sending verification code to:', email);
                showCodeVerification();
            }, 1500);
        }

        function showEmailValidation(message, isValid) {
            const validation = document.getElementById('email-validation');
            validation.style.display = 'block';
            validation.textContent = isValid ? '✓ ' + message : '✗ ' + message;
            validation.style.color = isValid ? 'var(--pet-success)' : 'var(--color-error)';
        }

        function showCodeVerification() {
            console.log('Showing code verification');
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            const codeScreen = document.getElementById('code-verification-screen');
            codeScreen.style.display = 'block';
            codeScreen.style.visibility = 'visible';
            codeScreen.style.zIndex = '1000';
            codeScreen.style.pointerEvents = 'auto';
            codeScreen.classList.add('active');
            
            // Update subtitle with email
            document.getElementById('code-subtitle').textContent = `Мы отправили 6-значный код на ${userEmail}`;
            
            // Setup code inputs
            setupCodeInputs();
            
            // Start resend timer
            startResendTimer();
            
            // Focus first input
            setTimeout(() => {
                document.querySelector('.code-input[data-index="0"]').focus();
            }, 100);
        }

        function setupCodeInputs() {
            const inputs = document.querySelectorAll('.code-input');
            
            inputs.forEach((input, index) => {
                input.value = '';
                input.style.borderColor = 'var(--color-border)';
                
                input.addEventListener('input', function(e) {
                    const value = e.target.value;
                    
                    // Only allow numbers
                    if (!/^[0-9]$/.test(value)) {
                        e.target.value = '';
                        return;
                    }
                    
                    // Move to next input
                    if (value && index < 5) {
                        inputs[index + 1].focus();
                    }
                    
                    // Check if all filled
                    checkCodeComplete();
                });
                
                input.addEventListener('keydown', function(e) {
                    // Backspace: clear and move to previous
                    if (e.key === 'Backspace' && !e.target.value && index > 0) {
                        inputs[index - 1].focus();
                    }
                });
                
                input.addEventListener('paste', function(e) {
                    e.preventDefault();
                    const pastedData = e.clipboardData.getData('text');
                    const digits = pastedData.replace(/\D/g, '').slice(0, 6);
                    
                    digits.split('').forEach((digit, i) => {
                        if (inputs[i]) {
                            inputs[i].value = digit;
                        }
                    });
                    
                    if (digits.length === 6) {
                        checkCodeComplete();
                    }
                });
            });
        }

        function checkCodeComplete() {
            const inputs = document.querySelectorAll('.code-input');
            const code = Array.from(inputs).map(i => i.value).join('');
            
            if (code.length === 6) {
                verifyCode(code);
            }
        }

        function verifyCode(code) {
            // Hide error
            document.getElementById('code-error').style.display = 'none';
            
            // Show loading
            document.getElementById('code-loading').style.display = 'block';
            
            // Disable inputs
            document.querySelectorAll('.code-input').forEach(i => i.disabled = true);
            
            // Simulate API verification (accept any 6-digit code for demo)
            setTimeout(() => {
                document.getElementById('code-loading').style.display = 'none';
                
                if (code.length === 6 && /^[0-9]{6}$/.test(code)) {
                    // Success
                    console.log('Code verified:', code);
                    authenticateUser();
                } else {
                    // Error
                    showCodeError('Неверный код. Попробуйте снова');
                }
            }, 1500);
        }

        function showCodeError(message) {
            const errorDiv = document.getElementById('code-error');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            
            // Shake animation
            const codeInputsDiv = document.getElementById('code-inputs');
            codeInputsDiv.style.animation = 'shake 0.5s';
            setTimeout(() => {
                codeInputsDiv.style.animation = '';
            }, 500);
            
            // Clear inputs and re-enable
            const inputs = document.querySelectorAll('.code-input');
            inputs.forEach(i => {
                i.value = '';
                i.disabled = false;
                i.style.borderColor = 'var(--color-error)';
            });
            
            // Focus first input
            inputs[0].focus();
            
            // Reset border colors after 1s
            setTimeout(() => {
                inputs.forEach(i => i.style.borderColor = 'var(--color-border)');
            }, 1000);
        }

        function startResendTimer() {
            resendCountdown = 30;
            const resendBtn = document.getElementById('resend-btn');
            const timerSpan = document.getElementById('resend-timer');
            resendBtn.disabled = true;
            
            if (resendTimer) clearInterval(resendTimer);
            
            resendTimer = setInterval(() => {
                resendCountdown--;
                timerSpan.textContent = resendCountdown;
                
                if (resendCountdown <= 0) {
                    clearInterval(resendTimer);
                    resendBtn.disabled = false;
                    resendBtn.innerHTML = 'Отправить повторно';
                }
            }, 1000);
        }

        function resendCode() {
            console.log('Resending code to:', userEmail);
            showToast('📨 Код отправлен повторно!');
            startResendTimer();
        }

        function authenticateUser() {
            // Check if new user (for demo, check if email is new)
            const isNewUser = !userEmail.includes('demo') && !userEmail.includes('test');
            
            currentUser = {
                id: 'user_' + Date.now(),
                email: userEmail,
                name: 'Пользователь',
                phone: '',
                profilePhoto: '',
                isNewUser: isNewUser,
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };
            
            isAuthenticated = true;
            
            if (isNewUser) {
                showProfileSetup();
            } else {
                showAuthenticatedApp();
            }
        }

        function showProfileSetup() {
            console.log('Showing profile setup');
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            const profileScreen = document.getElementById('profile-setup-screen');
            profileScreen.style.display = 'block';
            profileScreen.style.visibility = 'visible';
            profileScreen.style.zIndex = '1000';
            profileScreen.style.pointerEvents = 'auto';
            profileScreen.classList.add('active');
            setTimeout(() => {
                document.getElementById('profile-name').focus();
            }, 100);
        }

        function submitProfile(event) {
            event.preventDefault();
            const name = document.getElementById('profile-name').value.trim();
            const phone = document.getElementById('profile-phone').value.trim();
            
            currentUser.name = name || 'Пользователь';
            currentUser.phone = phone;
            
            showPetSetup();
        }

        function skipProfileSetup() {
            showPetSetup();
        }

        function showPetSetup() {
            console.log('Showing pet setup');
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            const petScreen = document.getElementById('pet-setup-screen');
            petScreen.style.display = 'block';
            petScreen.style.visibility = 'visible';
            petScreen.style.zIndex = '1000';
            petScreen.style.pointerEvents = 'auto';
            petScreen.classList.add('active');
            setTimeout(() => {
                document.getElementById('pet-name').focus();
            }, 100);
        }

        function submitFirstPet(event) {
            event.preventDefault();
            const name = document.getElementById('pet-name').value.trim();
            const species = document.getElementById('pet-species').value;
            const breed = document.getElementById('pet-breed').value.trim() || 'Смешанная порода';
            const dob = document.getElementById('pet-dob').value;
            
            const age = new Date().getFullYear() - new Date(dob).getFullYear();
            
            const newPet = {
                id: pets.length + 1,
                name: name,
                breed: breed,
                species: species,
                age: age,
                weight: species === 'dog' ? 15 : species === 'cat' ? 4 : 2,
                dateOfBirth: dob,
                vaccinationStatus: [],
                testResults: [],
                medicalRecords: [],
                symptoms: [],
                medications: [],
                allergies: [],
                conditions: [],
                notifications: []
            };
            
            pets.push(newPet);
            
            showCompletionMessage();
        }

        function skipPetSetup() {
            showCompletionMessage();
        }

        function showCompletionMessage() {
            console.log('Showing completion message');
            document.querySelectorAll('.screen').forEach(s => {
                s.style.display = 'none';
                s.style.visibility = 'hidden';
                s.classList.remove('active');
            });
            const welcomeScreen = document.getElementById('welcome-screen');
            welcomeScreen.style.display = 'block';
            welcomeScreen.style.visibility = 'visible';
            welcomeScreen.style.zIndex = '1000';
            welcomeScreen.style.pointerEvents = 'auto';
            welcomeScreen.classList.add('active');
            welcomeScreen.innerHTML = `
                <div style="min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; text-align: center;">
                    <div style="font-size: 80px; margin-bottom: 20px;">🎉</div>
                    <h1 style="font-size: 36px; margin-bottom: 12px; color: var(--pet-success);">Отлично! Профиль создан</h1>
                    <p style="font-size: 18px; color: var(--color-text-secondary);">Добро пожаловать в PetHealth!</p>
                    <div class="loading-spinner" style="margin-top: 32px;"></div>
                </div>
            `;
            
            setTimeout(() => {
                showAuthenticatedApp();
            }, 1500);
        }

        function showAuthenticatedApp() {
            console.log('Showing authenticated app');
            
            // Hide ALL auth screens completely
            const authScreens = ['welcome-screen', 'email-entry-screen', 'code-verification-screen', 'profile-setup-screen', 'pet-setup-screen'];
            authScreens.forEach(screenId => {
                const screen = document.getElementById(screenId);
                if (screen) {
                    screen.style.display = 'none';
                    screen.style.visibility = 'hidden';
                    screen.style.zIndex = '-1';
                    screen.style.pointerEvents = 'none';
                    screen.classList.remove('active');
                }
            });
            
            // Hide all main app screens first
            document.querySelectorAll('.container .screen').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active');
            });
            
            // Show home screen with proper visibility
            const homeScreen = document.getElementById('screen-home');
            homeScreen.style.display = 'block';
            homeScreen.style.visibility = 'visible';
            homeScreen.style.zIndex = '1';
            homeScreen.style.pointerEvents = 'auto';
            homeScreen.classList.add('active');
            
            // Show app chrome with proper visibility
            const mainHeader = document.getElementById('main-header');
            mainHeader.style.display = 'block';
            mainHeader.style.visibility = 'visible';
            mainHeader.style.zIndex = '100';
            
            const mainNav = document.getElementById('main-nav');
            mainNav.style.display = 'flex';
            mainNav.style.visibility = 'visible';
            mainNav.style.zIndex = '100';
            
            const fabQuick = document.getElementById('fab-quick');
            fabQuick.style.display = 'flex';
            fabQuick.style.visibility = 'visible';
            fabQuick.style.zIndex = '99';
            
            const fabScan = document.getElementById('fab-scan');
            fabScan.style.display = 'flex';
            fabScan.style.visibility = 'visible';
            fabScan.style.zIndex = '99';
            
            // Update settings with user info
            if (currentUser) {
                document.getElementById('settings-email').textContent = currentUser.email;
                document.getElementById('settings-name').textContent = currentUser.name;
            }
            
            // Initialize app content
            initAppContent();
        }

        function initAppContent() {
            renderHomeScreen();
            renderPets();
            renderAllRecords();
            renderAIScreen();
            renderMoreScreen();
            setupSeverityScale();
            updateNotificationBadge();
        }
        
        function renderHomeScreen() {
            // 1. Pet overview cards - питомцы вверху (приоритет #1)
            const overviewContainer = document.querySelector('#home-pets-overview > div');
            if (overviewContainer) {
                overviewContainer.innerHTML = pets.map(pet => {
                    const emoji = pet.species === 'dog' ? '🐕' : pet.species === 'cat' ? '🐈' : '🐾';
                    const healthStatus = getHealthStatus(pet);
                    const nextEvent = getNextEvent(pet);
                    
                    // Получаем информацию о калориях за сегодня
                    const today = new Date().toISOString().split('T')[0];
                    let todayCalories = 0;
                    let calorieGoal = 0;
                    if (pet.nutritionData) {
                        calorieGoal = pet.nutritionData.dailyCalorieGoal || 0;
                        if (pet.nutritionData.meals) {
                            pet.nutritionData.meals.forEach(meal => {
                                if (meal.date && meal.date.startsWith(today)) {
                                    todayCalories += meal.calories || 0;
                                }
                            });
                        }
                    }
                    const caloriesPercent = calorieGoal > 0 ? Math.round((todayCalories / calorieGoal) * 100) : 0;
                    
                    // Получаем информацию о весе и целях
                    let weightInfo = '';
                    if (pet.weight) {
                        weightInfo = `${pet.weight.toFixed(1)} кг`;
                        if (pet.weightGoals && pet.weightGoals.targetWeight) {
                            const target = pet.weightGoals.targetWeight;
                            const trend = pet.weightGoals.goalType === 'lose' ? '📉' : pet.weightGoals.goalType === 'gain' ? '📈' : '➡️';
                            weightInfo += ` / ${target} кг ${trend}`;
                        }
                    }
                    
                    return `
                        <div class="card" style="min-width: 200px; cursor: pointer;" onclick="showPetProfile(${pet.id})">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div class="pet-avatar" style="width: 48px; height: 48px; font-size: 24px;">${emoji}</div>
                                <div style="flex: 1;">
                                    <h3 style="margin-bottom: 4px; font-size: 16px;">${pet.name}</h3>
                                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                                        <div style="width: 6px; height: 6px; border-radius: 50%; background: ${healthStatus.color};"></div>
                                        <span style="font-size: 11px; color: var(--color-text-secondary);">${healthStatus.text}</span>
                                    </div>
                                    ${weightInfo ? `<div style="font-size: 10px; color: var(--color-text-secondary); margin-bottom: 4px;">⚖️ ${weightInfo}</div>` : ''}
                                    ${calorieGoal > 0 ? `<div style="font-size: 10px; color: var(--color-text-secondary);">🍽️ ${todayCalories}/${calorieGoal} ккал (${caloriesPercent}%)</div>` : ''}
                                </div>
                            </div>
                            ${nextEvent ? `<div style="margin-top: 8px; padding: 6px; background: var(--color-bg-2); border-radius: var(--radius-sm); font-size: 11px;">📅 ${nextEvent}</div>` : ''}
                        </div>
                    `;
                }).join('');
            }
            
            // 2. Events for today - события на сегодня (приоритет #2)
            const eventsContainer = document.getElementById('home-upcoming-events');
            if (eventsContainer) {
                const allEvents = getAllUpcomingEvents();
                const today = new Date().toISOString().split('T')[0];
                
                // Фильтруем события на сегодня
                const todayEvents = allEvents.filter(event => {
                    const eventDate = new Date(event.dueDate).toISOString().split('T')[0];
                    return eventDate === today;
                });
                
                const maxVisible = 3;
                const visibleEvents = todayEvents.slice(0, maxVisible);
                const hasMore = todayEvents.length > maxVisible;
                const hiddenEvents = hasMore ? todayEvents.slice(maxVisible) : [];
                
                // Сохраняем состояние раскрытия списка
                const hiddenDiv = document.getElementById('home-events-hidden');
                const wasExpanded = hiddenDiv && hiddenDiv.style.display !== 'none';
                
                if (todayEvents.length === 0) {
                    eventsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--color-text-secondary);">Нет событий на сегодня</div>';
                } else {
                    let eventsHTML = '<div id="home-events-visible">';
                    
                    // Показываем первые 3 события
                    eventsHTML += visibleEvents.map(event => `
                        <div class="notification-item ${event.priority}-priority" style="margin-bottom: 12px;">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="font-size: 24px;">${event.icon}</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: bold; margin-bottom: 4px;">${event.title}</div>
                                    <div style="font-size: 13px; color: var(--color-text-secondary);">${event.petName} • ${formatTimeUntil(event.dueDate)}</div>
                                </div>
                                <button class="btn btn-primary btn-sm" onclick="markNotificationDone(${event.id}); renderHomeScreen();">✓</button>
                            </div>
                        </div>
                    `).join('');
                    
                    eventsHTML += '</div>';
                    
                    // Скрытые события (раскрывающийся список)
                    if (hasMore) {
                        eventsHTML += `
                            <div id="home-events-hidden" style="display: ${wasExpanded ? 'block' : 'none'};">
                                ${hiddenEvents.map(event => `
                                    <div class="notification-item ${event.priority}-priority" style="margin-bottom: 12px;">
                                        <div style="display: flex; gap: 12px; align-items: center;">
                                            <div style="font-size: 24px;">${event.icon}</div>
                                            <div style="flex: 1;">
                                                <div style="font-weight: bold; margin-bottom: 4px;">${event.title}</div>
                                                <div style="font-size: 13px; color: var(--color-text-secondary);">${event.petName} • ${formatTimeUntil(event.dueDate)}</div>
                                            </div>
                                            <button class="btn btn-primary btn-sm" onclick="markNotificationDone(${event.id}); renderHomeScreen();">✓</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div style="text-align: center; margin-top: 12px;">
                                <button class="btn btn-secondary btn-sm" onclick="toggleHomeEvents()" id="home-events-toggle" style="width: 100%;">
                                    ${wasExpanded ? `Скрыть (${hiddenEvents.length})` : `Показать ещё (${hiddenEvents.length})`}
                                </button>
                            </div>
                        `;
                    }
                    
                    eventsContainer.innerHTML = eventsHTML;
                }
            }
            
            // 3. Daily status log - состояние питомца за день
            const statusContainer = document.getElementById('home-daily-status');
            if (statusContainer) {
                const today = new Date().toISOString().split('T')[0];
                const todayStatuses = [];
                
                // Собираем статусы за сегодня для всех питомцев
                pets.forEach(pet => {
                    if (pet.dailyStatusLogs) {
                        const todayLog = pet.dailyStatusLogs.find(log => log.date === today);
                        if (todayLog) {
                            todayStatuses.push({ ...todayLog, petName: pet.name, petId: pet.id });
                        }
                    }
                });
                
                let statusHTML = '';
                
                // Показываем существующие логи за сегодня
                if (todayStatuses.length > 0) {
                    statusHTML += '<div style="margin-bottom: 16px;">';
                    todayStatuses.forEach(status => {
                        const moodEmoji = {
                            'excellent': '😄',
                            'good': '🙂',
                            'normal': '😐',
                            'sad': '😔',
                            'anxious': '😰',
                            'tired': '😴'
                        }[status.mood] || '😐';
                        
                        statusHTML += `
                            <div class="card" style="margin-bottom: 12px; padding: 16px;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                    <div>
                                        <div style="font-weight: bold; margin-bottom: 4px;">${status.petName}</div>
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <div style="font-size: 24px;">${moodEmoji}</div>
                                            <div style="font-size: 14px; color: var(--color-text-secondary);">${status.mood === 'excellent' ? 'Отлично' : status.mood === 'good' ? 'Хорошо' : status.mood === 'normal' ? 'Нормально' : status.mood === 'sad' ? 'Грустно' : status.mood === 'anxious' ? 'Тревожно' : 'Устал'}</div>
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${status.statusScore}/10</div>
                                        <div style="font-size: 11px; color: var(--color-text-secondary);">Состояние</div>
                                    </div>
                                </div>
                                ${status.comment ? `<div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-sm); font-size: 13px; color: var(--color-text-secondary);">${status.comment}</div>` : ''}
                            </div>
                        `;
                    });
                    statusHTML += '</div>';
                }
                
                // Кнопка для добавления/редактирования лога
                statusHTML += `
                    <button class="btn btn-primary" onclick="showDailyStatusModal()" style="width: 100%;">
                        ${todayStatuses.length > 0 ? '✏️ Изменить состояние' : '➕ Записать состояние'}
                    </button>
                `;
                
                statusContainer.innerHTML = statusHTML;
            }
            
            // 4. AI Recommendations - рекомендации ИИ (приоритет #4)
            const recommendationsContainer = document.getElementById('home-ai-recommendations');
            if (recommendationsContainer) {
                renderAIRecommendations(recommendationsContainer);
            }
        }
        
        function getHealthStatus(pet) {
            const dueSoon = pet.vaccinationStatus?.find(v => v.status === 'due_soon');
            if (dueSoon) return { color: '#FFA500', text: 'Требуется внимание' };
            return { color: '#4CAF50', text: 'Здоров' };
        }
        
        function renderAIRecommendations(container) {
            // Check if we need to generate new recommendations (once per week)
            const lastRecommendation = aiRecommendations.length > 0 
                ? aiRecommendations.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
                : null;
            
            const today = new Date().toISOString().split('T')[0];
            const daysSinceLastRec = lastRecommendation 
                ? Math.floor((new Date(today) - new Date(lastRecommendation.date)) / (1000 * 60 * 60 * 24))
                : 999;
            
            // Generate new recommendation if it's been 7+ days
            if (daysSinceLastRec >= 7 || !lastRecommendation) {
                generateAIRecommendation();
            }
            
            // Get latest recommendation
            const latest = aiRecommendations.length > 0 
                ? aiRecommendations.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
                : null;
            
            if (!latest) {
                container.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--color-text-secondary);">Рекомендации появятся после накопления данных</div>';
                return;
            }
            
            const pet = pets.find(p => p.id === latest.petId);
            const petName = pet ? pet.name : 'Питомец';
            const statusEmoji = latest.status === 'positive' ? '✅' : latest.status === 'warning' ? '⚠️' : '🔴';
            const statusColor = latest.status === 'positive' ? 'var(--pet-success)' : latest.status === 'warning' ? 'var(--pet-warning)' : 'var(--pet-danger)';
            
            container.innerHTML = `
                <div class="card ai-recommendation-card" onclick="toggleAIRecommendationDetails()" style="cursor: pointer;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                <span style="font-size: 24px;">${statusEmoji}</span>
                                <div>
                                    <h3 style="margin: 0; font-size: 16px;">Состояние ${petName}</h3>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${formatDate(latest.date)}</div>
                                </div>
                            </div>
                            <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <p style="margin: 0; font-size: 14px; color: var(--color-text);">${latest.summary}</p>
                            </div>
                            ${latest.details ? `
                                <div style="display: flex; gap: 12px; font-size: 12px; color: var(--color-text-secondary);">
                                    <span>🏥 Оценка: ${latest.details.healthScore}/10</span>
                                    ${latest.details.recommendations && latest.details.recommendations.length > 0 
                                        ? `<span>💡 ${latest.details.recommendations.length} рекомендаций</span>` 
                                        : ''}
                                </div>
                            ` : ''}
                        </div>
                        <div class="ai-recommendation-arrow" style="font-size: 20px; color: var(--color-text-secondary); transition: transform 0.3s; margin-left: 12px;">›</div>
                    </div>
                    <div class="ai-recommendation-details" style="display: none; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-card-border);" onclick="event.stopPropagation();">
                        ${latest.details ? `
                            <div style="margin-bottom: 16px;">
                                <h4 style="margin-bottom: 12px; font-size: 14px;">📊 Анализ состояния</h4>
                                <div style="display: grid; gap: 8px;">
                                    ${latest.details.nutrition ? `
                                        <div style="padding: 10px; background: var(--color-bg-1); border-radius: var(--radius-sm);">
                                            <strong style="font-size: 12px;">🍽️ Питание:</strong>
                                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${latest.details.nutrition}</div>
                                        </div>
                                    ` : ''}
                                    ${latest.details.weight ? `
                                        <div style="padding: 10px; background: var(--color-bg-1); border-radius: var(--radius-sm);">
                                            <strong style="font-size: 12px;">⚖️ Вес:</strong>
                                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${latest.details.weight}</div>
                                        </div>
                                    ` : ''}
                                    ${latest.details.activity ? `
                                        <div style="padding: 10px; background: var(--color-bg-1); border-radius: var(--radius-sm);">
                                            <strong style="font-size: 12px;">🏃 Активность:</strong>
                                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${latest.details.activity}</div>
                                        </div>
                                    ` : ''}
                                    ${latest.details.medical ? `
                                        <div style="padding: 10px; background: var(--color-bg-1); border-radius: var(--radius-sm);">
                                            <strong style="font-size: 12px;">🩺 Медицина:</strong>
                                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${latest.details.medical}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                            ${latest.details.recommendations && latest.details.recommendations.length > 0 ? `
                                <div style="margin-bottom: 16px;">
                                    <h4 style="margin-bottom: 12px; font-size: 14px;">💡 Рекомендации</h4>
                                    <ul style="padding-left: 20px; margin: 0;">
                                        ${latest.details.recommendations.map(rec => `
                                            <li style="margin-bottom: 8px; font-size: 13px; color: var(--color-text-secondary);">${rec}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            ${latest.details.concerns && latest.details.concerns.length > 0 ? `
                                <div style="padding: 12px; background: var(--color-bg-4); border-radius: var(--radius-base); border-left: 3px solid var(--pet-warning);">
                                    <h4 style="margin-bottom: 8px; font-size: 14px; color: var(--pet-warning);">⚠️ Требует внимания</h4>
                                    <ul style="padding-left: 20px; margin: 0;">
                                        ${latest.details.concerns.map(concern => `
                                            <li style="margin-bottom: 4px; font-size: 12px;">${concern}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        ` : ''}
                        <div style="margin-top: 16px; text-align: center;">
                            <button class="btn btn-outline btn-sm" onclick="showAIRecommendationsHistory(); event.stopPropagation();">📜 История рекомендаций</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function toggleAIRecommendationDetails() {
            const details = document.querySelector('.ai-recommendation-details');
            const arrow = document.querySelector('.ai-recommendation-arrow');
            
            if (details && arrow) {
                const isExpanded = details.style.display !== 'none';
                if (isExpanded) {
                    details.style.display = 'none';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    details.style.display = 'block';
                    arrow.style.transform = 'rotate(90deg)';
                }
            }
        }
        
        function generateAIRecommendation() {
            // Analyze all pets and generate recommendations
            const today = new Date().toISOString().split('T')[0];
            pets.forEach(pet => {
                // Check if recommendation already exists for today
                const existingRec = aiRecommendations.find(r => 
                    r.petId === pet.id && r.date === today
                );
                
                if (!existingRec) {
                    const recommendation = analyzePetHealth(pet);
                    if (recommendation) {
                        aiRecommendations.push(recommendation);
                    }
                }
            });
        }
        
        function analyzePetHealth(pet) {
            const today = new Date().toISOString().split('T')[0];
            let healthScore = 8; // Base score
            const details = {
                nutrition: '',
                weight: '',
                activity: '',
                medical: '',
                concerns: [],
                recommendations: []
            };
            
            // Analyze nutrition
            if (pet.nutritionData) {
                const goal = pet.nutritionData.dailyCalorieGoal || 0;
                let todayCalories = 0;
                if (pet.nutritionData.meals) {
                    pet.nutritionData.meals.forEach(meal => {
                        if (meal.date && meal.date.startsWith(today)) {
                            todayCalories += meal.calories || 0;
                        }
                    });
                }
                
                if (goal > 0) {
                    const percent = Math.round((todayCalories / goal) * 100);
                    if (percent >= 80 && percent <= 120) {
                        details.nutrition = `Питание сбалансированное (${percent}% от цели)`;
                    } else if (percent < 80) {
                        details.nutrition = `Недостаточно калорий (${percent}% от цели)`;
                        details.concerns.push('Недостаточное питание');
                        details.recommendations.push('Увеличьте порции или добавьте перекусы');
                        healthScore -= 1;
                    } else {
                        details.nutrition = `Превышение калорий (${percent}% от цели)`;
                        details.concerns.push('Избыточное питание');
                        details.recommendations.push('Следите за размером порций');
                        healthScore -= 1;
                    }
                }
            }
            
            // Analyze weight
            if (pet.weightHistory && pet.weightHistory.length > 0) {
                const recent = pet.weightHistory.slice(0, 3);
                if (recent.length >= 2) {
                    const trend = recent[0].weight - recent[recent.length - 1].weight;
                    if (pet.weightGoals) {
                        if (pet.weightGoals.goalType === 'lose' && trend < 0) {
                            details.weight = `Вес снижается (${Math.abs(trend).toFixed(1)} кг) - отлично!`;
                            details.recommendations.push('Продолжайте текущий режим для достижения цели');
                        } else if (pet.weightGoals.goalType === 'gain' && trend > 0) {
                            details.weight = `Вес увеличивается (${trend.toFixed(1)} кг) - отлично!`;
                        } else {
                            details.weight = `Вес стабильный (${pet.weight.toFixed(1)} кг)`;
                        }
                    } else {
                        details.weight = `Вес стабильный (${pet.weight.toFixed(1)} кг)`;
                    }
                }
            }
            
            // Analyze medical records
            if (pet.vaccinationStatus) {
                const dueSoon = pet.vaccinationStatus.filter(v => v.status === 'due_soon');
                if (dueSoon.length > 0) {
                    details.medical = `Требуется вакцинация: ${dueSoon.map(v => v.vaccine).join(', ')}`;
                    details.concerns.push('Скоро истекает срок вакцинации');
                    details.recommendations.push(`Запланируйте вакцинацию: ${dueSoon.map(v => v.vaccine).join(', ')}`);
                    healthScore -= 1;
                } else {
                    details.medical = 'Все вакцинации актуальны';
                }
            }
            
            // Analyze symptoms
            if (pet.symptoms && pet.symptoms.length > 0) {
                const recentSymptoms = pet.symptoms.filter(s => {
                    const symptomDate = new Date(s.date);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return symptomDate >= weekAgo;
                });
                
                if (recentSymptoms.length > 0) {
                    const avgSeverity = recentSymptoms.reduce((sum, s) => sum + (s.severity || 0), 0) / recentSymptoms.length;
                    if (avgSeverity >= 5) {
                        details.concerns.push('Наблюдаются симптомы повышенной тяжести');
                        details.recommendations.push('Рекомендуется консультация ветеринара');
                        healthScore -= 2;
                    }
                }
            }
            
            // Determine status
            let status = 'positive';
            if (healthScore < 6) {
                status = 'critical';
            } else if (healthScore < 7 || details.concerns.length > 0) {
                status = 'warning';
            }
            
            // Generate summary
            let summary = '';
            if (status === 'positive') {
                summary = `Общее состояние ${pet.name} хорошее. Все показатели в норме.`;
            } else if (status === 'warning') {
                summary = `Состояние ${pet.name} требует внимания. Есть несколько моментов для улучшения.`;
            } else {
                summary = `Состояние ${pet.name} требует срочного внимания. Рекомендуется консультация ветеринара.`;
            }
            
            return {
                id: aiRecommendations.length + 1,
                date: today,
                petId: pet.id,
                summary: summary,
                status: status,
                details: {
                    ...details,
                    healthScore: Math.max(1, Math.min(10, healthScore))
                }
            };
        }
        
        function showAIRecommendationsHistory() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = 'ai-recommendations-history-modal';
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 600px; max-height: 80vh; overflow-y: auto;">
                    <div class="modal-header">
                        <h2>📜 История рекомендаций ИИ</h2>
                        <button class="close-btn" onclick="closeModal('ai-recommendations-history-modal')">&times;</button>
                    </div>
                    <div style="padding: 20px;">
                        <div class="timeline">
                            ${aiRecommendations.sort((a, b) => new Date(b.date) - new Date(a.date)).map(rec => {
                                const pet = pets.find(p => p.id === rec.petId);
                                const petName = pet ? pet.name : 'Питомец';
                                const statusEmoji = rec.status === 'positive' ? '✅' : rec.status === 'warning' ? '⚠️' : '🔴';
                                return `
                                    <div class="timeline-item">
                                        <div class="timeline-date">${formatDate(rec.date)}</div>
                                        <div class="timeline-content">
                                            <div class="timeline-title" style="display: flex; align-items: center; gap: 8px;">
                                                ${statusEmoji} ${petName}
                                            </div>
                                            <div style="margin: 8px 0; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                                                <p style="margin: 0; font-size: 14px;">${rec.summary}</p>
                                            </div>
                                            ${rec.details ? `
                                                <div style="margin-top: 12px;">
                                                    <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                                        Оценка здоровья: <strong>${rec.details.healthScore}/10</strong>
                                                    </div>
                                                    ${rec.details.recommendations && rec.details.recommendations.length > 0 ? `
                                                        <div style="font-size: 12px; color: var(--color-text-secondary);">
                                                            <strong>Рекомендации:</strong>
                                                            <ul style="margin: 4px 0 0 20px; padding: 0;">
                                                                ${rec.details.recommendations.map(r => `<li style="margin-bottom: 4px;">${r}</li>`).join('')}
                                                            </ul>
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.style.display = 'flex';
        }
        
        function getNextEvent(pet) {
            if (pet.notifications && pet.notifications.length > 0) {
                const next = pet.notifications[0];
                return `${next.title} - ${formatTimeUntil(next.dueDate)}`;
            }
            return null;
        }
        
        function getAllUpcomingEvents() {
            const events = [];
            pets.forEach(pet => {
                if (pet.notifications) {
                    pet.notifications.forEach(n => {
                        events.push({
                            ...n,
                            petName: pet.name,
                            icon: n.type === 'vaccination' ? '💉' : n.type === 'medication' ? '💊' : n.type === 'appointment' ? '🩺' : '📅'
                        });
                    });
                }
            });
            return events.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        }
        
        function getRecentActivities() {
            const activities = [];
            pets.forEach(pet => {
                if (pet.medicalRecords) {
                    pet.medicalRecords.forEach(record => {
                    activities.push({
                            date: record.date || new Date().toISOString().split('T')[0],
                            petName: pet.name || 'Питомец',
                        icon: '🩺',
                            title: visitTypeNames[record.visitType] || record.visitType || 'Визит',
                            description: record.diagnosis || 'Диагноз не указан'
                    });
                });
                }
                if (pet.symptoms) {
                    pet.symptoms.forEach(symptom => {
                        const symptomList = (symptom.symptoms || []).map(s => symptomNames[s] || s).join(', ') || 'Симптомы не указаны';
                    activities.push({
                            date: symptom.date || new Date().toISOString().split('T')[0],
                            petName: pet.name || 'Питомец',
                        icon: '📊',
                        title: 'Симптом',
                            description: symptomList
                    });
                });
                }
            });
            return activities.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        function renderQuickStats() {
            const quickStats = document.getElementById('quick-stats');
            const todayCalories = getTodayCalories();
            const weightProgress = getWeightProgress();
            const pendingNotifications = getAllNotifications().filter(n => n.status === 'pending').length;
            
            quickStats.innerHTML = `
                <div class="quick-stat-card">
                    <div class="quick-stat-icon" style="background: var(--color-bg-2);">
                        🍽️
                    </div>
                    <div class="quick-stat-content">
                        <div class="quick-stat-label">Сегодня калорий</div>
                        <div class="quick-stat-value">${todayCalories.consumed} / ${todayCalories.goal}</div>
                    </div>
                    <div class="progress-ring" style="background: conic-gradient(var(--nutrition-orange) ${todayCalories.percent}%, var(--color-secondary) 0);">
                        ${todayCalories.percent}%
                    </div>
                </div>
                <div class="quick-stat-card">
                    <div class="quick-stat-icon" style="background: var(--color-bg-3);">
                        ⚖️
                    </div>
                    <div class="quick-stat-content">
                        <div class="quick-stat-label">Прогресс по весу</div>
                        <div class="quick-stat-value">${weightProgress.percent}% до цели</div>
                    </div>
                    <div style="font-size: 24px;">${weightProgress.trend}</div>
                </div>
                <div class="quick-stat-card" onclick="showNotifications()" style="cursor: pointer;">
                    <div class="quick-stat-icon" style="background: var(--color-bg-4);">
                        🔔
                    </div>
                    <div class="quick-stat-content">
                        <div class="quick-stat-label">Уведомления</div>
                        <div class="quick-stat-value">${pendingNotifications} активных</div>
                    </div>
                </div>
            `;
        }

        function getTodayCalories() {
            const today = new Date().toISOString().split('T')[0];
            let consumed = 0;
            let goal = 0;
            
            pets.forEach(pet => {
                if (pet.nutritionData) {
                    goal += pet.nutritionData.dailyCalorieGoal;
                    pet.nutritionData.meals.forEach(meal => {
                        if (meal.date.startsWith(today)) {
                            consumed += meal.calories;
                        }
                    });
                }
            });
            
            const percent = goal > 0 ? Math.round((consumed / goal) * 100) : 0;
            return { consumed, goal, percent };
        }

        function getWeightProgress() {
            const pet = pets.find(p => p.weightGoals && p.weightGoals.targetWeight && p.weightGoals.targetWeight !== p.weight);
            if (!pet || !pet.weightGoals || !pet.weightHistory || pet.weightHistory.length === 0) {
                return { percent: 0, trend: '➡️' };
            }
            
            const current = pet.weight || 0;
            const target = pet.weightGoals.targetWeight || current;
            const start = pet.weightHistory[pet.weightHistory.length - 1]?.weight || current;
            const totalChange = Math.abs(target - start);
            const currentChange = Math.abs(start - current);
            const percent = totalChange > 0 ? Math.round((currentChange / totalChange) * 100) : 0;
            
            let trend = '➡️';
            if (pet.weightGoals.goalType === 'lose' && current < start) trend = '📉';
            if (pet.weightGoals.goalType === 'gain' && current > start) trend = '📈';
            
            return { percent, trend };
        }
        
        function getActiveWeightGoals() {
            const activeGoals = [];
            
            pets.forEach(pet => {
                if (pet.weightGoals && pet.weightGoals.targetWeight && pet.weightHistory && pet.weightHistory.length > 0) {
                    const current = pet.weight || 0;
                    const target = pet.weightGoals.targetWeight;
                    const start = pet.weightHistory[pet.weightHistory.length - 1]?.weight || current;
                    
                    // Рассчитываем прогресс в зависимости от типа цели
                    let progress = 0;
                    let trend = '➡️';
                    
                    if (pet.weightGoals.goalType === 'lose') {
                        // Для снижения веса: прогресс = сколько потеряли от начального веса к цели
                        const totalToLose = start - target;
                        const currentLoss = start - current;
                        progress = totalToLose > 0 ? Math.round((currentLoss / totalToLose) * 100) : 0;
                        if (current < start) trend = '📉';
                    } else if (pet.weightGoals.goalType === 'gain') {
                        // Для набора веса: прогресс = сколько набрали от начального веса к цели
                        const totalToGain = target - start;
                        const currentGain = current - start;
                        progress = totalToGain > 0 ? Math.round((currentGain / totalToGain) * 100) : 0;
                        if (current > start) trend = '📈';
                    } else if (pet.weightGoals.goalType === 'maintain') {
                        // Для поддержания: показываем отклонение от цели
                        const deviation = Math.abs(current - target);
                        const maxDeviation = target * 0.1; // 10% отклонение считается нормальным
                        progress = maxDeviation > 0 ? Math.max(0, 100 - Math.round((deviation / maxDeviation) * 100)) : 100;
                        if (Math.abs(current - target) < 0.1) trend = '✅';
                    }
                    
                    // Ограничиваем прогресс от 0 до 100
                    progress = Math.max(0, Math.min(100, progress));
                    
                    activeGoals.push({
                        petName: pet.name,
                        currentWeight: current.toFixed(1),
                        targetWeight: target.toFixed(1),
                        progress: progress,
                        trend: trend,
                        goalType: pet.weightGoals.goalType
                    });
                }
            });
            
            return activeGoals;
        }
        
        function toggleHomeEvents() {
            const hiddenDiv = document.getElementById('home-events-hidden');
            const toggleBtn = document.getElementById('home-events-toggle');
            
            if (hiddenDiv && toggleBtn) {
                const isHidden = hiddenDiv.style.display === 'none';
                hiddenDiv.style.display = isHidden ? 'block' : 'none';
                
                // Получаем события на сегодня для правильного подсчета
                const allEvents = getAllUpcomingEvents();
                const today = new Date().toISOString().split('T')[0];
                const todayEvents = allEvents.filter(event => {
                    const eventDate = new Date(event.dueDate).toISOString().split('T')[0];
                    return eventDate === today;
                });
                const hiddenCount = todayEvents.length - 3;
                
                if (isHidden) {
                    toggleBtn.textContent = `Скрыть (${hiddenCount})`;
                } else {
                    toggleBtn.textContent = `Показать ещё (${hiddenCount})`;
                }
            }
        }

        function showSettingsScreen() {
            showScreen('screen-more');
        }

        function showLogoutConfirm() {
            if (confirm('Вы уверены, что хотите выйти?')) {
                logout();
            }
        }

        function showDeleteAccountConfirm() {
            if (confirm('Это действие удалит все ваши данные и не может быть отменено. Вы уверены?')) {
                if (confirm('Подтвердите удаление аккаунта. Это действие необратимо!')) {
                    deleteAccount();
                }
            }
        }

        function logout() {
            isAuthenticated = false;
            currentUser = null;
            userEmail = '';
            
            // Hide main app completely
            document.getElementById('main-header').style.display = 'none';
            document.getElementById('main-nav').style.display = 'none';
            document.getElementById('fab-quick').style.display = 'none';
            document.getElementById('fab-scan').style.display = 'none';
            
            // Hide all main app screens
            document.querySelectorAll('.container .screen').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active');
            });
            
            showToast('👋 Вы вышли из аккаунта');
            setTimeout(() => {
                showWelcomeScreen();
            }, 500);
        }

        function deleteAccount() {
            isAuthenticated = false;
            currentUser = null;
            userEmail = '';
            pets = [];
            showToast('❌ Аккаунт удален');
            setTimeout(() => {
                showWelcomeScreen();
            }, 500);
        }

        function showScreen(screenId) {
            // Hide all screens in the container
            document.querySelectorAll('.container .screen').forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active');
            });
            
            // Show target screen
            const targetScreen = document.getElementById(screenId);
            if (targetScreen) {
                targetScreen.style.display = 'block';
                targetScreen.style.visibility = 'visible';
                targetScreen.style.pointerEvents = 'auto';
                targetScreen.classList.add('active');
            }
            
            // Update navigation
            document.querySelectorAll('.nav-item').forEach((item, index) => {
                item.classList.remove('active');
            });
            
            const navMapping = {
                'screen-home': 0,
                'screen-pets': 1,
                'screen-calendar': 2,
                'screen-nutrition-weight': 3,
                'screen-ai': 4,
                'screen-more': -1, // Not in bottom nav
                'screen-records': -1, // Moved to "Ещё" screen
                'pet-profile': 1,
                'edit-pet-screen': 1,
                'scanner-screen': 4,
                'settings-screen': -1,
                'notifications-screen': 0
            };
            
            if (navMapping[screenId] !== undefined && navMapping[screenId] >= 0) {
                const navItems = document.querySelectorAll('.nav-item');
                if (navItems[navMapping[screenId]]) {
                    navItems[navMapping[screenId]].classList.add('active');
                }
            }
            
            // Manage FAB button visibility
            const fabBtn = document.getElementById('fab-add-pet');
            if (fabBtn) {
                if (screenId === 'screen-pets') {
                    // Show FAB on mobile/tablet, hide on desktop (handled by CSS)
                    const isMobile = window.innerWidth <= 1024;
                    fabBtn.style.display = isMobile ? 'flex' : 'none';
                } else {
                    fabBtn.style.display = 'none';
                }
            }
            
            // Refresh content for specific screens
            if (screenId === 'screen-home') renderHomeScreen();
            if (screenId === 'screen-pets') renderPets();
            if (screenId === 'screen-calendar') renderCalendar();
            if (screenId === 'screen-ai') renderAIScreen();
            if (screenId === 'screen-more') renderMoreScreen();
            if (screenId === 'screen-nutrition-weight') renderNutritionWeightScreen();
            if (screenId === 'notifications-screen') renderNotifications();
            if (screenId === 'screen-records') {
                // Reset filter to 'all' if not set
                if (!currentRecordTypeFilter) {
                    currentRecordTypeFilter = 'all';
                }
                // Initialize chip highlighting
                document.querySelectorAll('#screen-records .chip').forEach(chip => {
                    chip.style.background = 'var(--color-secondary)';
                    chip.style.color = 'var(--color-text)';
                });
                // Highlight "Все" chip if filter is 'all'
                if (currentRecordTypeFilter === 'all') {
                    const allChip = Array.from(document.querySelectorAll('#screen-records .chip')).find(chip => chip.textContent.trim() === 'Все');
                    if (allChip) {
                        allChip.style.background = 'var(--color-primary)';
                        allChip.style.color = 'white';
                    }
                }
                renderAllRecords();
            }
        }

        function renderPets() {
            const grid = document.getElementById('pets-grid');
            if (!grid) return;
            
            if (pets.length === 0) {
                grid.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px; color: var(--color-text-secondary);">
                        <div style="font-size: 64px; margin-bottom: 16px;">🐾</div>
                        <h3 style="margin-bottom: 8px;">Нет питомцев</h3>
                        <p style="margin-bottom: 24px;">Добавьте первого питомца, чтобы начать</p>
                        <button class="btn btn-primary" onclick="showAddPetModal()">+ Добавить питомца</button>
                    </div>
                `;
                return;
            }
            
            grid.innerHTML = pets.map(pet => {
                const emoji = pet.species === 'dog' ? '🐕' : pet.species === 'cat' ? '🐈' : '🐾';
                const vaccinationStatus = pet.vaccinationStatus || [];
                const medicalRecords = pet.medicalRecords || [];
                const nextVaccine = vaccinationStatus.find(v => v.status === 'due_soon' || v.status === 'overdue');
                const lastVisit = medicalRecords.length > 0 ? medicalRecords[0].date : null;
                
                // Статус здоровья
                const healthStatus = getHealthStatus(pet);
                
                // Пол
                const gender = pet.gender === 'male' ? '♂ Мальчик' : pet.gender === 'female' ? '♀ Девочка' : '';
                const neutered = pet.neutered ? ' • Стерилизован' : '';
                
                // Дата рождения
                const dob = pet.dateOfBirth ? formatDate(pet.dateOfBirth) : 'Не указана';
                
                // Калории за сегодня
                const today = new Date().toISOString().split('T')[0];
                let todayCalories = 0;
                let calorieGoal = 0;
                if (pet.nutritionData) {
                    calorieGoal = pet.nutritionData.dailyCalorieGoal || 0;
                    if (pet.nutritionData.meals) {
                        pet.nutritionData.meals.forEach(meal => {
                            if (meal.date && meal.date.startsWith(today)) {
                                todayCalories += meal.calories || 0;
                            }
                        });
                    }
                }
                
                // Цель по весу
                let weightGoalInfo = '';
                if (pet.weightGoals && pet.weightGoals.targetWeight) {
                    const trend = pet.weightGoals.goalType === 'lose' ? '📉' : pet.weightGoals.goalType === 'gain' ? '📈' : '➡️';
                    weightGoalInfo = ` / ${pet.weightGoals.targetWeight} кг ${trend}`;
                }
                
                return `
                    <div class="pet-passport-card" onclick="showPetProfile(${pet.id})">
                        <div class="pet-passport-header">
                            <div class="pet-passport-avatar">${emoji}</div>
                            <div class="pet-passport-title">
                                <h2>${pet.name || 'Питомец'}</h2>
                                <div class="pet-passport-subtitle">${pet.breed || 'Порода не указана'}</div>
                            </div>
                            <div class="pet-passport-status" style="background: ${healthStatus.color === '#4CAF50' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 165, 0, 0.1)'}; border: 1px solid ${healthStatus.color};">
                                <div style="width: 8px; height: 8px; border-radius: 50%; background: ${healthStatus.color}; margin-right: 6px;"></div>
                                <span style="font-size: 12px; font-weight: 500;">${healthStatus.text}</span>
                            </div>
                        </div>
                        
                        <div class="pet-passport-body">
                            <div class="pet-passport-row">
                                <div class="pet-passport-label">Возраст</div>
                                <div class="pet-passport-value">${pet.age || 0} лет</div>
                            </div>
                            <div class="pet-passport-row desktop-only">
                                <div class="pet-passport-label">Дата рождения</div>
                                <div class="pet-passport-value">${dob}</div>
                            </div>
                            <div class="pet-passport-row">
                                <div class="pet-passport-label">Вес</div>
                                <div class="pet-passport-value">${pet.weight ? `${pet.weight.toFixed(1)} кг${weightGoalInfo}` : 'Не указан'}</div>
                            </div>
                            <div class="pet-passport-row desktop-only">
                                <div class="pet-passport-label">Пол</div>
                                <div class="pet-passport-value">${gender}${neutered}</div>
                            </div>
                            ${calorieGoal > 0 ? `
                            <div class="pet-passport-row mobile-compact">
                                <div class="pet-passport-label">Калории</div>
                                <div class="pet-passport-value">${todayCalories}/${calorieGoal} ккал</div>
                            </div>
                            ` : ''}
                            ${pet.microchipNumber ? `
                            <div class="pet-passport-row desktop-only">
                                <div class="pet-passport-label">Чип</div>
                                <div class="pet-passport-value" style="font-size: 11px; font-family: monospace;">${pet.microchipNumber}</div>
                            </div>
                            ` : ''}
                            ${lastVisit ? `
                            <div class="pet-passport-row desktop-only">
                                <div class="pet-passport-label">Последний визит</div>
                                <div class="pet-passport-value">${formatDate(lastVisit)}</div>
                            </div>
                            ` : ''}
                            ${nextVaccine ? `
                            <div class="pet-passport-row pet-vaccine-warning" style="background: rgba(255, 165, 0, 0.05); border-left: 3px solid #FFA500; padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 8px;">
                                <div class="pet-passport-label">⚠️ Вакцинация</div>
                                <div class="pet-passport-value" style="color: #FFA500; font-weight: 500;">${nextVaccine.name || 'Требуется'}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function showPetProfile(petId) {
            currentPet = pets.find(p => p.id === petId);
            if (!currentPet) {
                showToast('❌ Питомец не найден');
                return;
            }
            
            const emoji = currentPet.species === 'dog' ? '🐕' : currentPet.species === 'cat' ? '🐈' : '🐾';
            
            const content = document.getElementById('pet-profile-content');
            content.innerHTML = `
                <div class="card" style="margin-bottom: 20px;">
                    <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
                        <div class="pet-avatar" style="width: 100px; height: 100px; font-size: 48px;">${emoji}</div>
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <h2 style="margin-bottom: 8px;">${currentPet.name || 'Питомец'}</h2>
                                    <div style="color: var(--color-text-secondary); margin-bottom: 8px;">
                                        ${currentPet.breed || ''} • ${currentPet.age || 0} лет • ${currentPet.weight || 0} кг
                                        ${currentPet.bloodGroup ? ` • 🩸 ${currentPet.bloodGroup}` : ''}
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm" onclick="showEditPetScreen(${currentPet.id})" title="Редактировать профиль">✏️</button>
                            </div>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                <button class="btn btn-primary btn-sm" onclick="showQRPassport(${currentPet.id})">📱 QR-Паспорт</button>
                                <button class="btn btn-secondary btn-sm" onclick="showAddRecordModal(${currentPet.id})">+ Добавить запись</button>
                                <button class="btn btn-secondary btn-sm" onclick="showScannerForPet(${currentPet.id})">📷 Сканировать</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tabs">
                    <div class="tab active" onclick="switchTab(event, 'health-summary')">Обзор здоровья</div>
                    <div class="tab" onclick="switchTab(event, 'health-timeline')">История визитов</div>
                    <div class="tab" onclick="switchTab(event, 'symptoms-diary')">Дневник симптомов</div>
                    <div class="tab" onclick="switchTab(event, 'analytics')">Аналитика</div>
                </div>
                
                <div id="health-summary" class="tab-content active">
                    ${renderHealthSummary(currentPet)}
                </div>
                
                <div id="health-timeline" class="tab-content">
                    ${renderHealthTimeline(currentPet)}
                </div>
                
                <div id="symptoms-diary" class="tab-content">
                    ${renderSymptomsDiary(currentPet)}
                </div>
                
                <div id="analytics" class="tab-content">
                    ${renderAnalytics(currentPet)}
                </div>
            `;
            
            showScreen('pet-profile');
        }

        function switchTab(event, tabId) {
            const tabs = event.target.parentElement.querySelectorAll('.tab');
            tabs.forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            
            const contents = document.querySelectorAll('#pet-profile-content .tab-content');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        }

        function renderHealthSummary(pet) {
            if (!pet) return '<div class="empty-state"><p>Питомец не найден</p></div>';
            
            const vaccinationStatus = pet.vaccinationStatus || [];
            const medications = pet.medications || [];
            const allergies = pet.allergies || [];
            const conditions = pet.conditions || [];
            const medicalRecords = pet.medicalRecords || [];
            
            const activeVaccines = vaccinationStatus.filter(v => v.status === 'current').length;
            const dueSoonVaccines = vaccinationStatus.filter(v => v.status === 'due_soon').length;
            
            return `
                <div class="grid">
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">📊 Статус вакцинации</h3>
                        <div style="margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span>Актуальных:</span>
                                <strong style="color: var(--pet-success);">${activeVaccines}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Скоро истекут:</span>
                                <strong style="color: var(--pet-warning);">${dueSoonVaccines}</strong>
                            </div>
                        </div>
                        ${vaccinationStatus.length > 0 ? vaccinationStatus.map(v => `
                            <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>${v.vaccine || 'Вакцина'}</strong>
                                        <div style="font-size: 12px; color: var(--color-text-secondary);">Следующая: ${v.nextDue ? formatDate(v.nextDue) : 'Не указано'}</div>
                                    </div>
                                    <span class="status-badge ${v.status === 'current' ? 'success' : 'warning'}">
                                        ${v.status === 'current' ? '✓ Актуально' : '⚠️ Скоро'}
                                    </span>
                                </div>
                            </div>
                        `).join('') : '<p style="color: var(--color-text-secondary);">Нет данных о вакцинациях</p>'}
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">💊 Активные препараты</h3>
                        ${medications.length > 0 ? `
                            <div class="medication-list">
                                ${medications.filter(m => !m.status || m.status === 'active').map(m => `
                                    <div class="medication-item">
                                        <strong>${m.name || 'Препарат'}</strong>
                                        <div style="font-size: 12px; margin-top: 4px;">${m.dosage || ''} • ${m.frequency || ''}</div>
                                        ${m.reason ? `<div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">Причина: ${m.reason}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : '<p style="color: var(--color-text-secondary);">Нет активных препаратов</p>'}
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">🩸 Последние анализы</h3>
                        ${pet.testResults && pet.testResults.length > 0 ? `
                            ${renderLatestTestResults(pet.testResults.slice(0, 1))}
                        ` : '<p style="color: var(--color-text-secondary);">Нет данных об анализах</p>'}
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">⚠️ Аллергии и состояния</h3>
                        ${allergies.length > 0 ? `
                            <div style="margin-bottom: 16px;">
                                <strong>Аллергии:</strong>
                                <div class="symptom-tags">
                                    ${allergies.map(a => `<span class="symptom-tag">${a}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                        ${conditions.length > 0 ? `
                            <div>
                                <strong>Хронические состояния:</strong>
                                <div class="symptom-tags">
                                    ${conditions.map(c => `<span class="symptom-tag">${c}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                        ${allergies.length === 0 && conditions.length === 0 ? '<p style="color: var(--color-text-secondary);">Нет известных аллергий или состояний</p>' : ''}
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">🩺 Последние визиты</h3>
                        ${medicalRecords.length > 0 ? medicalRecords.slice(0, 3).map(r => `
                            <div style="padding: 12px; background: var(--color-bg-2); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                    <strong>${visitTypeNames[r.visitType] || r.visitType || 'Визит'}</strong>
                                    <span style="font-size: 12px; color: var(--color-text-secondary);">${r.date ? formatDate(r.date) : ''}</span>
                                </div>
                                <div style="font-size: 12px;">${r.diagnosis || 'Диагноз не указан'}</div>
                                ${r.clinicName ? `<div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">${r.clinicName}</div>` : ''}
                            </div>
                        `).join('') : '<p style="color: var(--color-text-secondary);">Нет записей о визитах</p>'}
                    </div>
                </div>
            `;
        }

        function renderLatestTestResults(testResults) {
            if (!testResults || testResults.length === 0) return '';
            
            const latest = testResults[0];
            const values = latest.values || {};
            const keyIndicators = ['glucose', 'creatinine', 'urea', 'alt'];
            
            return `
                <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <div>
                            <strong>${latest.date ? formatDate(latest.date) : 'Дата не указана'}</strong>
                            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 2px;">${latest.clinicName || 'Клиника не указана'}</div>
                        </div>
                        <button class="btn btn-outline btn-sm" onclick="showTestResultDetails(${latest.id})">Подробнее</button>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                        ${keyIndicators.map(key => {
                            const indicator = values[key];
                            if (!indicator) return '';
                            const statusColor = indicator.status === 'normal' ? 'var(--pet-success)' : indicator.status === 'high' ? 'var(--pet-warning)' : 'var(--pet-danger)';
                            return `
                                <div style="padding: 8px; background: var(--color-bg-2); border-radius: var(--radius-sm);">
                                    <div style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 2px;">${getIndicatorName(key)}</div>
                                    <div style="font-size: 14px; font-weight: bold; color: ${statusColor};">
                                        ${indicator.value} ${indicator.unit || ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        function getIndicatorName(key) {
            const names = {
                glucose: 'Глюкоза',
                creatinine: 'Креатинин',
                urea: 'Мочевина',
                alt: 'АЛТ',
                ast: 'АСТ',
                totalProtein: 'Общий белок',
                albumin: 'Альбумин'
            };
            return names[key] || key;
        }

        function showTestResultDetails(testId) {
            const pet = currentPet;
            if (!pet || !pet.testResults) return;
            
            const test = pet.testResults.find(t => t.id === testId);
            if (!test) return;
            
            const values = test.values || {};
            const allIndicators = Object.keys(values);
            
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = 'test-result-modal';
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 600px;">
                    <div class="modal-header">
                        <h2>📊 Результаты анализов</h2>
                        <button class="close-btn" onclick="closeModal('test-result-modal')">&times;</button>
                    </div>
                    <div style="padding: 20px;">
                        <div style="margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <strong>Дата:</strong>
                                <span>${test.date ? formatDate(test.date) : 'Не указана'}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <strong>Клиника:</strong>
                                <span>${test.clinicName || 'Не указана'}</span>
                            </div>
                            ${test.notes ? `<div style="margin-top: 12px; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                                <strong>Примечания:</strong>
                                <div style="margin-top: 4px; color: var(--color-text-secondary);">${test.notes}</div>
                            </div>` : ''}
                        </div>
                        
                        <h3 style="margin-bottom: 16px;">Показатели</h3>
                        <div style="display: grid; gap: 8px;">
                            ${allIndicators.map(key => {
                                const indicator = values[key];
                                if (!indicator) return '';
                                const statusColor = indicator.status === 'normal' ? 'var(--pet-success)' : indicator.status === 'high' ? 'var(--pet-warning)' : 'var(--pet-danger)';
                                const statusText = indicator.status === 'normal' ? '✓ Норма' : indicator.status === 'high' ? '⚠ Повышен' : indicator.status === 'low' ? '⚠ Понижен' : '';
                                return `
                                    <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 3px solid ${statusColor};">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                            <strong>${getIndicatorName(key)}</strong>
                                            <span style="font-size: 12px; color: ${statusColor}; font-weight: 500;">${statusText}</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--color-text-secondary);">
                                            <span>${indicator.value} ${indicator.unit || ''}</span>
                                            <span>Норма: ${indicator.normal || 'Не указано'}</span>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.style.display = 'flex';
        }

        function renderHealthTimeline(pet) {
            if (!pet) return '<div class="empty-state"><div class="empty-state-icon">📋</div><p>Питомец не найден</p></div>';
            
            const medicalRecords = pet.medicalRecords || [];
            const testResults = pet.testResults || [];
            
            // Combine and sort by date
            const allEvents = [
                ...medicalRecords.map(r => ({ ...r, type: 'record' })),
                ...testResults.map(t => ({ ...t, type: 'test' }))
            ].sort((a, b) => {
                const dateA = new Date(a.date || 0);
                const dateB = new Date(b.date || 0);
                return dateB - dateA;
            });
            
            if (allEvents.length === 0) {
                return '<div class="empty-state"><div class="empty-state-icon">📋</div><p>Нет медицинских записей</p></div>';
            }
            
            return `
                <div class="timeline">
                    ${allEvents.map(event => {
                        if (event.type === 'test') {
                            return `
                                <div class="timeline-item" onclick="showTestResultDetails(${event.id})" style="cursor: pointer;">
                                    <div class="timeline-date">${event.date ? formatDate(event.date) : 'Дата не указана'}</div>
                                    <div class="timeline-content">
                                        <div class="timeline-title" style="display: flex; align-items: center; gap: 8px;">
                                            🩸 Биохимический анализ - ${event.clinicName || 'Клиника не указана'}
                                        </div>
                                        ${event.notes ? `<div style="margin: 8px 0; color: var(--color-text-secondary);">${event.notes}</div>` : ''}
                                        ${event.values ? `
                                            <div style="margin-top: 12px; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                                                <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">Основные показатели:</div>
                                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                                                    ${Object.keys(event.values).slice(0, 6).map(key => {
                                                        const indicator = event.values[key];
                                                        const statusColor = indicator.status === 'normal' ? 'var(--pet-success)' : indicator.status === 'high' ? 'var(--pet-warning)' : 'var(--pet-danger)';
                                                        return `
                                                            <div style="text-align: center; padding: 6px; background: var(--color-bg-2); border-radius: var(--radius-sm);">
                                                                <div style="font-size: 10px; color: var(--color-text-secondary);">${getIndicatorName(key)}</div>
                                                                <div style="font-size: 12px; font-weight: bold; color: ${statusColor};">${indicator.value}</div>
                                                            </div>
                                                        `;
                                                    }).join('')}
                                                </div>
                                                <div style="margin-top: 8px; text-align: center; font-size: 11px; color: var(--color-primary);">Нажмите для подробностей →</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;
                        } else {
                            return `
                                <div class="timeline-item">
                                    <div class="timeline-date">${event.date ? formatDate(event.date) : 'Дата не указана'}</div>
                                    <div class="timeline-content">
                                        <div class="timeline-title">${visitTypeNames[event.visitType] || event.visitType || 'Визит'} - ${event.clinicName || 'Клиника не указана'}</div>
                                        <div style="margin: 8px 0;"><strong>Диагноз:</strong> ${event.diagnosis || 'Не указан'}</div>
                                        ${event.notes ? `<div style="margin: 8px 0; color: var(--color-text-secondary);">${event.notes}</div>` : ''}
                                        ${event.medications && event.medications.length > 0 ? `
                                            <div style="margin-top: 12px;">
                                                <strong>Назначенные препараты:</strong>
                                                ${event.medications.map(m => `
                                                    <div style="padding: 8px; background: var(--color-bg-3); border-radius: var(--radius-sm); margin-top: 8px;">
                                                        <strong>${m.name || 'Препарат'}</strong> - ${m.dosage || ''}<br>
                                                        <small>${m.frequency || ''} в течение ${m.duration || ''}</small>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            `;
        }

        function renderSymptomsDiary(pet) {
            if (!pet) return '<div class="empty-state"><div class="empty-state-icon">📊</div><p>Питомец не найден</p></div>';
            
            const symptoms = pet.symptoms || [];
            if (symptoms.length === 0) {
                return '<div class="empty-state"><div class="empty-state-icon">📊</div><p>Нет записей о симптомах</p></div>';
            }
            
            return `
                <div class="timeline">
                    ${symptoms.map(symptom => `
                        <div class="timeline-item">
                            <div class="timeline-date">${symptom.date ? formatDate(symptom.date) : 'Дата не указана'}</div>
                            <div class="timeline-content">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <div class="symptom-tags">
                                        ${(symptom.symptoms || []).map(s => `<span class="symptom-tag">${symptomNames[s] || s || 'Симптом'}</span>`).join('')}
                                    </div>
                                    <span style="padding: 4px 12px; background: ${getSeverityColor(symptom.severity || 0)}; border-radius: var(--radius-full); font-size: 12px; font-weight: 500;">Тяжесть: ${symptom.severity || 0}/10</span>
                                </div>
                                ${symptom.duration ? `<div style="margin: 8px 0;"><strong>Продолжительность:</strong> ${symptom.duration}</div>` : ''}
                                ${symptom.notes ? `<div style="color: var(--color-text-secondary);">${symptom.notes}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderAnalytics(pet) {
            if (!pet) return '<div class="empty-state"><p>Питомец не найден</p></div>';
            
            const medicalRecords = pet.medicalRecords || [];
            const symptoms = pet.symptoms || [];
            const weightHistory = pet.weightHistory || [];
            const nutritionData = pet.nutritionData || { meals: [] };
            
            const totalVisits = medicalRecords.length;
            const totalSymptoms = symptoms.length;
            const avgSeverity = symptoms.length > 0 ? (symptoms.reduce((sum, s) => sum + (s.severity || 0), 0) / symptoms.length).toFixed(1) : 0;
            
            // Calculate weight change
            let weightChange = '';
            let weightTrend = '➡️';
            if (weightHistory.length >= 2) {
                const currentWeight = weightHistory[0]?.weight || pet.weight || 0;
                const previousWeight = weightHistory[1]?.weight || currentWeight;
                const change = currentWeight - previousWeight;
                if (change > 0) {
                    weightChange = `+${change.toFixed(1)} кг`;
                    weightTrend = '📈';
                } else if (change < 0) {
                    weightChange = `${change.toFixed(1)} кг`;
                    weightTrend = '📉';
                } else {
                    weightChange = '0 кг';
                }
            }
            
            // Calculate calories stats
            const today = new Date().toISOString().split('T')[0];
            let todayCalories = 0;
            nutritionData.meals.forEach(meal => {
                if (meal.date && meal.date.startsWith(today)) {
                    todayCalories += meal.calories || 0;
                }
            });
            const dailyGoal = nutritionData.dailyCalorieGoal || 0;
            const caloriesPercent = dailyGoal > 0 ? Math.round((todayCalories / dailyGoal) * 100) : 0;
            
            return `
                <div class="grid">
                    <div class="chart-container">
                        <div class="chart-title">📈 Динамика веса</div>
                        <div style="text-align: center; padding: 40px;">
                            <div style="font-size: 48px; font-weight: bold; color: var(--color-primary);">${pet.weight || 0} кг</div>
                            <div style="color: var(--color-text-secondary); margin-top: 8px;">Текущий вес</div>
                            ${weightChange ? `<div style="margin-top: 8px; font-size: 18px; color: ${weightChange.startsWith('+') ? 'var(--pet-warning)' : weightChange.startsWith('-') ? 'var(--nutrition-green)' : 'var(--color-text-secondary)'};">${weightTrend} ${weightChange}</div>` : ''}
                            ${weightHistory.length > 0 ? `<div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Записей: ${weightHistory.length}</div>` : ''}
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <div class="chart-title">🩺 Статистика визитов</div>
                        <div style="padding: 20px;">
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <span>Всего визитов:</span>
                                <strong>${totalVisits}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--color-bg-2); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <span>Записей о симптомах:</span>
                                <strong>${totalSymptoms}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                                <span>Средняя тяжесть:</span>
                                <strong>${avgSeverity}/10</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chart-container">
                        <div class="chart-title">🍽️ Питание сегодня</div>
                        <div style="padding: 20px;">
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <span>Съедено калорий:</span>
                                <strong>${todayCalories}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: var(--color-bg-2); border-radius: var(--radius-base); margin-bottom: 8px;">
                                <span>Цель:</span>
                                <strong>${dailyGoal}</strong>
                            </div>
                            <div style="padding: 12px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                    <span>Прогресс:</span>
                                    <strong>${caloriesPercent}%</strong>
                                </div>
                                <div style="height: 8px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                    <div style="width: ${Math.min(caloriesPercent, 100)}%; height: 100%; background: var(--nutrition-orange);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderAllRecords() {
            // Update pet filter
            const filterSelect = document.getElementById('records-pet-filter');
            if (filterSelect) {
                const currentPetFilter = filterSelect.value || 'all';
                filterSelect.innerHTML = '<option value="all">Все питомцы</option>' + 
                    pets.map(p => `<option value="${p.id}" ${currentPetFilter == p.id ? 'selected' : ''}>${p.name}</option>`).join('');
            }
            
            // Get current filters
            const petFilter = filterSelect ? filterSelect.value : 'all';
            const typeFilter = currentRecordTypeFilter || 'all';
            
            // Collect all records based on type filter
            let allRecords = [];
            
            if (typeFilter === 'all' || typeFilter === 'visits') {
                // Medical records (visits) - exclude tests
                const selectedPets = petFilter === 'all' ? pets : pets.filter(p => p.id == petFilter);
                const medicalRecords = selectedPets.flatMap(pet => 
                    (pet.medicalRecords || [])
                        .filter(r => r.visitType !== 'test' && r.visitType !== 'lab_test')
                        .map(r => ({ 
                            ...r, 
                            petName: pet.name, 
                            petId: pet.id,
                            recordType: 'visit'
                        }))
                );
                allRecords = allRecords.concat(medicalRecords);
            }
            
            if (typeFilter === 'all' || typeFilter === 'tests') {
                // Test records (lab tests, analyses)
                const selectedPets = petFilter === 'all' ? pets : pets.filter(p => p.id == petFilter);
                const testRecords = selectedPets.flatMap(pet => 
                    (pet.medicalRecords || [])
                        .filter(r => r.visitType === 'test' || r.visitType === 'lab_test')
                        .map(r => ({ 
                            ...r, 
                            petName: pet.name, 
                            petId: pet.id,
                            recordType: 'test'
                        }))
                );
                allRecords = allRecords.concat(testRecords);
            }
            
            if (typeFilter === 'all' || typeFilter === 'vaccines') {
                // Vaccination records
                const selectedPets = petFilter === 'all' ? pets : pets.filter(p => p.id == petFilter);
                const vaccineRecords = selectedPets.flatMap(pet => 
                    (pet.vaccinationStatus || []).map(v => ({
                        id: `vaccine-${pet.id}-${v.vaccine}`,
                        date: v.lastDate || v.nextDue,
                        petName: pet.name,
                        petId: pet.id,
                        recordType: 'vaccine',
                        visitType: 'vaccination',
                        clinicName: 'Вакцинация',
                        diagnosis: `Вакцинация: ${v.vaccine}`,
                        notes: `Последняя: ${v.lastDate ? formatDate(v.lastDate) : 'Не указана'}, Следующая: ${v.nextDue ? formatDate(v.nextDue) : 'Не указана'}, Статус: ${v.status === 'current' ? 'Актуальна' : v.status === 'due_soon' ? 'Скоро нужна' : 'Просрочена'}`
                    }))
                );
                allRecords = allRecords.concat(vaccineRecords);
            }
            
            if (typeFilter === 'all' || typeFilter === 'medications') {
                // Medication records
                const selectedPets = petFilter === 'all' ? pets : pets.filter(p => p.id == petFilter);
                const medicationRecords = selectedPets.flatMap(pet => 
                    (pet.medications || []).map(m => ({
                        id: `medication-${pet.id}-${m.id}`,
                        date: m.startDate || new Date().toISOString().split('T')[0],
                        petName: pet.name,
                        petId: pet.id,
                        recordType: 'medication',
                        visitType: 'medication',
                        clinicName: 'Лекарство',
                        diagnosis: m.name,
                        notes: `Дозировка: ${m.dosage}, Частота: ${m.frequency}, Причина: ${m.reason || 'Не указана'}, Статус: ${m.status === 'active' ? 'Активно' : 'Завершено'}`
                    }))
                );
                allRecords = allRecords.concat(medicationRecords);
            }
            
            if (typeFilter === 'all' || typeFilter === 'symptoms') {
                // Symptom records
                const selectedPets = petFilter === 'all' ? pets : pets.filter(p => p.id == petFilter);
                const symptomRecords = selectedPets.flatMap(pet => 
                    (pet.symptoms || []).map(s => ({
                        id: `symptom-${pet.id}-${s.id}`,
                        date: s.date,
                        petName: pet.name,
                        petId: pet.id,
                        recordType: 'symptom',
                        visitType: 'symptom',
                        clinicName: 'Симптом',
                        diagnosis: `Симптомы: ${Array.isArray(s.symptoms) ? s.symptoms.join(', ') : s.symptoms}`,
                        notes: `Тяжесть: ${s.severity}/10, Длительность: ${s.duration || 'Не указана'}, ${s.notes || ''}`
                    }))
                );
                allRecords = allRecords.concat(symptomRecords);
            }
            
            // Sort by date
            allRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            const content = document.getElementById('all-records-content');
            
            if (allRecords.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📋</div><p>Нет записей</p><button class="btn btn-primary" onclick="showAddRecordModal()" style="margin-top: 16px;">+ Добавить запись</button></div>';
                return;
            }
            
            content.innerHTML = `
                <div class="timeline">
                    ${allRecords.map(record => `
                        <div class="timeline-item">
                            <div class="timeline-date">${formatDate(record.date)} • ${record.petName}</div>
                            <div class="timeline-content">
                                <div class="timeline-title">${visitTypeNames[record.visitType] || record.visitType || 'Запись'} - ${record.clinicName || 'Не указано'}</div>
                                <div style="margin: 8px 0;"><strong>${record.recordType === 'symptom' ? 'Описание' : 'Диагноз'}:</strong> ${record.diagnosis}</div>
                                ${record.notes ? `<div style="color: var(--color-text-secondary);">${record.notes}</div>` : ''}
                                ${record.medications && record.medications.length > 0 ? `
                                    <div style="margin-top: 12px;">
                                        <strong>Препараты:</strong>
                                        ${record.medications.map(m => `<div class="medication-item" style="margin-top: 8px;"><strong>${m.name}</strong> - ${m.dosage}, ${m.frequency}</div>`).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderSymptoms() {
            const allSymptoms = pets.flatMap(pet => 
                pet.symptoms.map(s => ({ ...s, petName: pet.name, petId: pet.id }))
            ).sort((a, b) => new Date(b.date) - new Date(a.date));
            
            const content = document.getElementById('symptoms-content');
            
            if (allSymptoms.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📊</div><p>Нет записей о симптомах</p></div>';
                return;
            }
            
            content.innerHTML = `
                <div class="timeline">
                    ${allSymptoms.map(symptom => `
                        <div class="timeline-item">
                            <div class="timeline-date">${formatDate(symptom.date)} • ${symptom.petName}</div>
                            <div class="timeline-content">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <div class="symptom-tags">
                                        ${symptom.symptoms.map(s => `<span class="symptom-tag">${symptomNames[s] || s}</span>`).join('')}
                                    </div>
                                    <span style="padding: 4px 12px; background: ${getSeverityColor(symptom.severity)}; border-radius: var(--radius-full); font-size: 12px; font-weight: 500;">Тяжесть: ${symptom.severity}/10</span>
                                </div>
                                <div style="margin: 8px 0;"><strong>Продолжительность:</strong> ${symptom.duration}</div>
                                ${symptom.notes ? `<div style="color: var(--color-text-secondary);">${symptom.notes}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Calendar Functions
        function renderCalendar() {
            const petFilter = document.getElementById('calendar-pet-filter');
            if (petFilter) {
                petFilter.innerHTML = '<option value="all">Все питомцы</option>' + 
                    pets.map(p => `<option value="${p.id}" ${selectedCalendarPet == p.id ? 'selected' : ''}>${p.name}</option>`).join('');
            }
            
            if (currentCalendarView === 'month') {
                renderMonthView();
            } else if (currentCalendarView === 'week') {
                renderWeekView();
            } else {
                renderListView();
            }
        }
        
        function switchCalendarView(event, view) {
            const tabs = event.target.parentElement.querySelectorAll('.tab');
            tabs.forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            
            document.querySelectorAll('#screen-calendar .tab-content').forEach(c => c.classList.remove('active'));
            
            currentCalendarView = view;
            if (view === 'month') {
                document.getElementById('calendar-month-view').classList.add('active');
                renderMonthView();
            } else if (view === 'week') {
                document.getElementById('calendar-week-view').classList.add('active');
                renderWeekView();
            } else {
                document.getElementById('calendar-list-view').classList.add('active');
                renderListView();
            }
        }
        
        function renderMonthView() {
            const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            const title = document.getElementById('calendar-month-title');
            title.textContent = `${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}`;
            
            const container = document.getElementById('calendar-grid-container');
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();
            const todayStr = formatDateKey(today);
            
            let html = '<div class="calendar-grid">';
            
            // Headers
            ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(day => {
                html += `<div class="calendar-header">${day}</div>`;
            });
            
            // Empty cells
            const startDay = firstDay === 0 ? 6 : firstDay - 1;
            for (let i = 0; i < startDay; i++) {
                html += '<div class="calendar-day" style="opacity: 0.3;"></div>';
            }
            
            // Days
            for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = formatDateKey(new Date(year, month, day));
                const dayEvents = getEventsForDate(dateStr);
                const isToday = dateStr === todayStr;
                
                const eventDots = getEventDots(dayEvents);
                
                html += `
                    <div class="calendar-day ${isToday ? 'calendar-today' : ''}" onclick="selectCalendarDate('${dateStr}')" style="cursor: pointer; position: relative; ${isToday ? 'border: 2px solid var(--color-primary); font-weight: bold;' : ''}">
                        <div style="margin-bottom: 4px;">${day}</div>
                        ${eventDots}
                    </div>
                `;
            }
            
            html += '</div>';
            container.innerHTML = html;
        }
        
        function getEventsForDate(dateStr) {
            const events = calendarEvents[dateStr] || [];
            if (selectedCalendarPet === 'all') return events;
            return events.filter(e => e.petId == selectedCalendarPet);
        }
        
        function getEventDots(events) {
            if (events.length === 0) return '';
            
            const typeColors = {
                appointment: '#F44336',
                vaccination: '#2196F3',
                medication: '#4CAF50',
                symptom: '#FFA500',
                reminder: '#9E9E9E'
            };
            
            const uniqueTypes = [...new Set(events.map(e => e.type))];
            const dots = uniqueTypes.slice(0, 3).map(type => 
                `<div style="width: 6px; height: 6px; border-radius: 50%; background: ${typeColors[type] || '#999'}; display: inline-block; margin: 0 1px;"></div>`
            ).join('');
            
            const extra = uniqueTypes.length > 3 ? `<span style="font-size: 10px; margin-left: 2px;">+${uniqueTypes.length - 3}</span>` : '';
            
            return `<div style="position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%); white-space: nowrap;">${dots}${extra}</div>`;
        }
        
        function selectCalendarDate(dateStr) {
            const events = getEventsForDate(dateStr);
            const selectedDate = new Date(dateStr + 'T00:00:00');
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);
            
            const isPast = selectedDate < today;
            const isToday = selectedDate.getTime() === today.getTime();
            const isFuture = selectedDate > today;
            
            const modalTitle = document.getElementById('calendar-modal-title');
            const modalContent = document.getElementById('calendar-modal-content');
            
            modalTitle.textContent = formatDateLong(selectedDate);
            
            if (isPast) {
                renderPastDateView(events, dateStr);
            } else if (isToday) {
                renderTodayView(events, dateStr);
            } else {
                renderFutureDateView(events, dateStr);
            }
            
            document.getElementById('calendar-date-modal').classList.add('active');
        }
        
        function renderPastDateView(events, dateStr) {
            const content = document.getElementById('calendar-modal-content');
            
            if (events.length === 0) {
                content.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📅</div>
                        <p>В этот день событий не было</p>
                        <button class="btn btn-secondary" onclick="addBacklogEntry('${dateStr}')">Добавить запись задним числом</button>
                    </div>
                `;
                return;
            }
            
            let html = '<div style="margin-bottom: 16px;">';
            
            events.forEach(event => {
                const pet = pets.find(p => p.id === event.petId);
                const petName = pet ? pet.name : 'Питомец';
                
                html += `<div class="card" style="margin-bottom: 12px; padding: 16px;">`;
                
                if (event.type === 'appointment') {
                    html += `
                        <div style="display: flex; gap: 12px;">
                            <div style="font-size: 32px;">🏥</div>
                            <div style="flex: 1;">
                                <h4 style="margin-bottom: 4px;">Визит в ${event.clinic}</h4>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                    ${petName} • ${event.time}
                                </div>
                                ${event.diagnosis ? `<div style="margin-bottom: 4px;"><strong>Диагноз:</strong> ${event.diagnosis}</div>` : ''}
                                ${event.notes ? `<div style="font-size: 13px; color: var(--color-text-secondary);">${event.notes}</div>` : ''}
                            </div>
                        </div>
                    `;
                } else if (event.type === 'symptom') {
                    html += `
                        <div style="display: flex; gap: 12px;">
                            <div style="font-size: 32px;">🩺</div>
                            <div style="flex: 1;">
                                <h4 style="margin-bottom: 4px;">Симптомы</h4>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                    ${petName} • ${event.time === 'all-day' ? 'Весь день' : event.time}
                                </div>
                                <div class="symptom-tags">
                                    ${event.symptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}
                                </div>
                                ${event.severity ? `<div style="margin-top: 8px;">Тяжесть: <span style="padding: 2px 8px; background: ${getSeverityColor(event.severity)}; border-radius: var(--radius-full); font-size: 12px;">${event.severity}/10</span></div>` : ''}
                            </div>
                        </div>
                    `;
                } else if (event.type === 'medication') {
                    html += `
                        <div style="display: flex; gap: 12px;">
                            <div style="font-size: 32px;">💊</div>
                            <div style="flex: 1;">
                                <h4 style="margin-bottom: 4px;">${event.medication}</h4>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                    ${petName} • ${event.time}
                                </div>
                                <div>Дозировка: ${event.dosage}</div>
                                <div style="margin-top: 8px;">
                                    <span class="status-badge ${event.status === 'taken' ? 'success' : 'warning'}">
                                        ${event.status === 'taken' ? '✅ Принято' : '❌ Пропущено'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (event.type === 'vaccination') {
                    html += `
                        <div style="display: flex; gap: 12px;">
                            <div style="font-size: 32px;">💉</div>
                            <div style="flex: 1;">
                                <h4 style="margin-bottom: 4px;">${event.vaccine}</h4>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                    ${petName} • ${event.clinic}
                                </div>
                                <span class="status-badge success">✅ Выполнено</span>
                            </div>
                        </div>
                    `;
                }
                
                html += '</div>';
            });
            
            html += '</div>';
            html += `<button class="btn btn-secondary" onclick="addBacklogEntry('${dateStr}')" style="width: 100%;">Добавить запись задним числом</button>`;
            
            content.innerHTML = html;
        }
        
        function renderTodayView(events, dateStr) {
            const content = document.getElementById('calendar-modal-content');
            
            let html = '<div style="margin-bottom: 20px;">';
            
            if (events.length > 0) {
                html += '<h4 style="margin-bottom: 12px;">Сегодняшние события</h4>';
                events.forEach(event => {
                    const pet = pets.find(p => p.id === event.petId);
                    html += `
                        <div class="card" style="margin-bottom: 8px; padding: 12px;">
                            <div style="display: flex; justify-content: between; align-items: center;">
                                <div>
                                    <strong>${event.medication || event.vaccine || 'Событие'}</strong>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${pet?.name} • ${event.time}</div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } else {
                html += '<p style="color: var(--color-text-secondary); margin-bottom: 16px;">Нет запланированных событий</p>';
            }
            
            html += '</div>';
            html += '<h4 style="margin-bottom: 12px;">Быстрые действия</h4>';
            html += `
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <button class="btn btn-primary" onclick="quickAddVisit('${dateStr}')">🩺 Записать визит сейчас</button>
                    <button class="btn btn-secondary" onclick="quickAddSymptom('${dateStr}')">📊 Лог симптома</button>
                    <button class="btn btn-secondary" onclick="scheduleEvent('${dateStr}')">📅 Запланировать событие</button>
                </div>
            `;
            
            content.innerHTML = html;
        }
        
        function renderFutureDateView(events, dateStr) {
            const content = document.getElementById('calendar-modal-content');
            
            let html = '';
            
            if (events.length > 0) {
                html += '<div style="margin-bottom: 20px;">';
                html += '<h4 style="margin-bottom: 12px;">Запланированные события</h4>';
                events.forEach(event => {
                    const pet = pets.find(p => p.id === event.petId);
                    html += `
                        <div class="card" style="margin-bottom: 8px; padding: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div>
                                    <strong>${event.vaccine || event.clinic || event.medication || 'Событие'}</strong>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${pet?.name} • ${event.time}</div>
                                    ${event.notes ? `<div style="font-size: 12px; margin-top: 4px;">${event.notes}</div>` : ''}
                                </div>
                                <button class="btn btn-outline btn-sm" onclick="deleteEvent(${event.id})">✕</button>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            }
            
            html += `<button class="btn btn-primary" onclick="scheduleEvent('${dateStr}')" style="width: 100%; margin-bottom: 12px;">+ Добавить новое событие</button>`;
            
            content.innerHTML = html;
        }
        
        function scheduleEvent(dateStr) {
            closeModal('calendar-date-modal');
            
            const petSelect = document.getElementById('event-pet-select');
            petSelect.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            
            document.getElementById('event-date-input').value = dateStr;
            document.getElementById('event-time-input').value = '10:00';
            
            document.getElementById('add-event-modal').classList.add('active');
        }
        
        function quickAddVisit(dateStr) {
            closeModal('calendar-date-modal');
            showAddRecordModal();
        }
        
        function quickAddSymptom(dateStr) {
            closeModal('calendar-date-modal');
            showAddSymptomModal();
        }
        
        function addBacklogEntry(dateStr) {
            closeModal('calendar-date-modal');
            showAddRecordModal();
        }
        
        function updateEventTypeFields() {
            const eventType = document.getElementById('event-type-select').value;
            const clinicField = document.getElementById('clinic-field');
            const doctorField = document.getElementById('doctor-field');
            
            if (eventType === 'vet_visit' || eventType === 'vaccination' || eventType === 'lab_test' || eventType === 'procedure') {
                clinicField.style.display = 'block';
                doctorField.style.display = 'block';
                document.getElementById('event-clinic-input').required = true;
            } else {
                clinicField.style.display = 'none';
                doctorField.style.display = 'none';
                document.getElementById('event-clinic-input').required = false;
            }
        }
        
        function toggleReminderOptions() {
            const enabled = document.getElementById('reminder-enabled').checked;
            document.getElementById('reminder-options').style.display = enabled ? 'block' : 'none';
        }
        
        function saveCalendarEvent(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            const dateStr = formData.get('eventDate');
            if (!calendarEvents[dateStr]) calendarEvents[dateStr] = [];
            
            const newEvent = {
                id: Date.now(),
                type: formData.get('eventType') === 'vaccination' ? 'vaccination' : 'appointment',
                petId: parseInt(formData.get('petId')),
                time: formData.get('eventTime'),
                duration: 30,
                clinic: formData.get('clinic') || '',
                eventType: formData.get('eventType'),
                status: 'scheduled',
                notes: formData.get('notes') || '',
                reminder: formData.get('reminderEnabled') ? formData.get('reminderTime') : null
            };
            
            if (formData.get('eventType') === 'vaccination') {
                newEvent.vaccine = 'Вакцинация';
            }
            
            calendarEvents[dateStr].push(newEvent);
            
            closeModal('add-event-modal');
            renderCalendar();
            showToast('✅ Событие добавлено в календарь!');
            event.target.reset();
        }
        
        function deleteEvent(eventId) {
            for (const dateStr in calendarEvents) {
                calendarEvents[dateStr] = calendarEvents[dateStr].filter(e => e.id !== eventId);
                if (calendarEvents[dateStr].length === 0) {
                    delete calendarEvents[dateStr];
                }
            }
            closeModal('calendar-date-modal');
            renderCalendar();
            showToast('✅ Событие удалено');
        }
        
        function renderWeekView() {
            const container = document.getElementById('calendar-week-container');
            const weekTitle = document.getElementById('calendar-week-title');
            
            const startOfWeek = new Date(currentCalendarDate);
            startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() === 0 ? 6 : startOfWeek.getDay() - 1));
            
            weekTitle.textContent = `${formatDateLong(startOfWeek)} - ${formatDateLong(new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000))}`;
            
            let html = '<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">';
            
            const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
            
            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(date.getDate() + i);
                const dateStr = formatDateKey(date);
                const events = getEventsForDate(dateStr);
                
                html += `
                    <div class="card" style="padding: 12px; min-height: 200px; cursor: pointer;" onclick="selectCalendarDate('${dateStr}')">
                        <div style="text-align: center; margin-bottom: 12px;">
                            <div style="font-weight: bold;">${dayNames[i]}</div>
                            <div style="font-size: 20px; color: var(--color-primary);">${date.getDate()}</div>
                        </div>
                        <div style="font-size: 12px;">
                            ${events.map(e => {
                                const pet = pets.find(p => p.id === e.petId);
                                return `<div style="padding: 4px; background: var(--color-bg-1); border-radius: var(--radius-sm); margin-bottom: 4px;">${e.time} ${pet?.name || ''}</div>`;
                            }).join('')}
                        </div>
                    </div>
                `;
            }
            
            html += '</div>';
            container.innerHTML = html;
        }
        
        function renderListView() {
            const container = document.getElementById('calendar-list-container');
            const filter = document.getElementById('calendar-list-filter').value;
            
            let allEvents = [];
            for (const dateStr in calendarEvents) {
                const events = getEventsForDate(dateStr);
                events.forEach(event => {
                    allEvents.push({ ...event, dateStr });
                });
            }
            
            // Apply filter
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (filter === 'past') {
                allEvents = allEvents.filter(e => new Date(e.dateStr) < today);
            } else if (filter === 'upcoming') {
                allEvents = allEvents.filter(e => new Date(e.dateStr) >= today);
            } else if (filter !== 'all') {
                allEvents = allEvents.filter(e => e.type === filter);
            }
            
            // Sort by date
            allEvents.sort((a, b) => new Date(b.dateStr) - new Date(a.dateStr));
            
            if (allEvents.length === 0) {
                container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📅</div><p>Нет событий</p></div>';
                return;
            }
            
            // Group by month
            const grouped = {};
            allEvents.forEach(event => {
                const date = new Date(event.dateStr);
                const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
                if (!grouped[monthKey]) grouped[monthKey] = [];
                grouped[monthKey].push(event);
            });
            
            let html = '';
            const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            
            for (const monthKey in grouped) {
                const [year, month] = monthKey.split('-');
                html += `<h4 style="margin: 20px 0 12px 0;">${monthNames[parseInt(month)]} ${year}</h4>`;
                
                grouped[monthKey].forEach(event => {
                    const pet = pets.find(p => p.id === event.petId);
                    const date = new Date(event.dateStr);
                    
                    html += `
                        <div class="card" style="margin-bottom: 12px; padding: 16px; cursor: pointer;" onclick="selectCalendarDate('${event.dateStr}')">
                            <div style="display: flex; gap: 12px;">
                                <div style="font-size: 32px;">${event.type === 'appointment' ? '🏥' : event.type === 'vaccination' ? '💉' : event.type === 'medication' ? '💊' : event.type === 'symptom' ? '🩺' : '📌'}</div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                        <strong>${event.vaccine || event.medication || event.clinic || 'Событие'}</strong>
                                        <span style="font-size: 12px; color: var(--color-text-secondary);">${date.getDate()} ${monthNames[date.getMonth()]}</span>
                                    </div>
                                    <div style="font-size: 13px; color: var(--color-text-secondary);">
                                        ${pet?.name || 'Питомец'} • ${event.time}
                                    </div>
                                    ${event.notes ? `<div style="font-size: 13px; margin-top: 4px;">${event.notes}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            container.innerHTML = html;
        }
        
        function filterCalendar() {
            selectedCalendarPet = document.getElementById('calendar-pet-filter').value;
            renderCalendar();
        }
        
        function filterCalendarList() {
            renderListView();
        }
        
        function previousMonth() {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderMonthView();
        }
        
        function nextMonth() {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderMonthView();
        }
        
        function previousWeek() {
            currentCalendarDate.setDate(currentCalendarDate.getDate() - 7);
            renderWeekView();
        }
        
        function nextWeek() {
            currentCalendarDate.setDate(currentCalendarDate.getDate() + 7);
            renderWeekView();
        }
        
        function goToToday() {
            currentCalendarDate = new Date(2025, 10, 22);
            renderMonthView();
        }
        
        function formatDateKey(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        
        function formatDateLong(date) {
            const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
            return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        }
        
        function renderCalendarOld() {
            const content = document.getElementById('calendar-content');
            
            const upcomingEvents = [];
            pets.forEach(pet => {
                pet.vaccinationStatus.forEach(v => {
                    if (v.status === 'due_soon') {
                        upcomingEvents.push({
                            date: v.nextDue,
                            type: 'vaccination',
                            description: `${pet.name} - ${v.vaccine}`,
                            petName: pet.name
                        });
                    }
                });
            });
            
            upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            content.innerHTML = `
                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 16px;">📅 Предстоящие события</h3>
                    ${upcomingEvents.length > 0 ? `
                        ${upcomingEvents.map(event => `
                            <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px; border-left: 4px solid var(--color-primary);">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>${event.description}</strong>
                                        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">Вакцинация</div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-weight: 500;">${formatDate(event.date)}</div>
                                        <span class="status-badge warning" style="margin-top: 4px;">⚠️ Скоро</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    ` : '<p style="color: var(--color-text-secondary);">Нет предстоящих событий</p>'}
                </div>
                
                <div class="card">
                    <h3 style="margin-bottom: 16px;">🗓️ Календарь на ноябрь 2025</h3>
                    <div class="calendar-grid">
                        <div class="calendar-header">Пн</div>
                        <div class="calendar-header">Вт</div>
                        <div class="calendar-header">Ср</div>
                        <div class="calendar-header">Чт</div>
                        <div class="calendar-header">Пт</div>
                        <div class="calendar-header">Сб</div>
                        <div class="calendar-header">Вс</div>
                        ${generateCalendarDays()}
                    </div>
                </div>
            `;
        }

        function generateCalendarDays() {
            const days = [];
            for (let i = 1; i <= 30; i++) {
                const hasEvent = i === 10 || i === 15 || i === 22;
                days.push(`<div class="calendar-day ${hasEvent ? 'has-event' : ''}">${i}</div>`);
            }
            return days.join('');
        }

        function renderAIScreen() {
            const petSelect = document.getElementById('ai-symptom-pet');
            if (petSelect) {
                petSelect.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            }
            
            // Fill pet select for scanner
            const scannerPetSelect = document.getElementById('ai-scanner-pet-select');
            if (scannerPetSelect) {
                scannerPetSelect.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            }
            
            // Reset all tool cards to collapsed state
            document.querySelectorAll('.ai-tool-card').forEach(card => {
                const content = card.querySelector('.ai-tool-content');
                const arrow = card.querySelector('.ai-tool-arrow');
                if (content) content.style.display = 'none';
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            });
        }
        
        function toggleAITool(toolId, event) {
            // Prevent event propagation if called from inside the card
            if (event) {
                event.stopPropagation();
            }
            
            const card = document.querySelector(`[data-tool="${toolId}"]`);
            if (!card) return;
            
            const content = card.querySelector('.ai-tool-content');
            const arrow = card.querySelector('.ai-tool-arrow');
            const isExpanded = content.style.display !== 'none';
            
            // Close all other tools
            document.querySelectorAll('.ai-tool-card').forEach(otherCard => {
                if (otherCard !== card) {
                    const otherContent = otherCard.querySelector('.ai-tool-content');
                    const otherArrow = otherCard.querySelector('.ai-tool-arrow');
                    if (otherContent) otherContent.style.display = 'none';
                    if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current tool
            if (isExpanded) {
                content.style.display = 'none';
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                if (arrow) arrow.style.transform = 'rotate(90deg)';
                
                // Scroll to card if needed
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        }
        
        function processAIVisitNotes() {
            const notes = document.getElementById('ai-notes-input').value.trim();
            if (!notes) {
                showToast('❌ Введите заметки для обработки');
                return;
            }
            
            showToast('⏳ AI обрабатывает заметки...');
            
            setTimeout(() => {
                const content = document.getElementById('ai-visit-summary-content');
                content.innerHTML = `
                    <div class="ai-summary" style="margin-bottom: 16px;">
                        <div class="ai-badge">✨ AI обработал заметки</div>
                    </div>
                    
                    <div class="extracted-data-section">
                        <h4 style="margin-bottom: 12px;">📋 Жалобы</h4>
                        <p>Вялость 2 дня, отказ от еды</p>
                    </div>
                    
                    <div class="extracted-data-section">
                        <h4 style="margin-bottom: 12px;">🔍 Осмотр</h4>
                        <p>Температура 39.2°C, левое ухо красное с выделениями</p>
                    </div>
                    
                    <div class="extracted-data-section">
                        <h4 style="margin-bottom: 12px;">🎯 Диагноз</h4>
                        <p>Отит (инфекция уха)</p>
                    </div>
                    
                    <div class="extracted-data-section">
                        <h4 style="margin-bottom: 12px;">💊 Назначения</h4>
                        <div class="medication-extracted">
                            <strong>Амоксициллин</strong> - 500мг<br>
                            <small>2 раза в день, 10 дней</small>
                        </div>
                        <div class="medication-extracted">
                            <strong>Карпрофен</strong> - 75мг<br>
                            <small>1 раз в день с едой, 5 дней</small>
                        </div>
                    </div>
                    
                    <div class="extracted-data-section">
                        <h4 style="margin-bottom: 12px;">📅 План наблюдения</h4>
                        <p>Держать ухо сухим, вернуться при ухудшении</p>
                    </div>
                    
                    <div style="display: flex; gap: 12px; margin-top: 20px;">
                        <button class="btn btn-primary" onclick="saveAIVisitSummary()" style="flex: 1;">💾 Сохранить в медкарту</button>
                        <button class="btn btn-secondary" onclick="addMedicationsToSchedule()">📅 Добавить лекарства в расписание</button>
                    </div>
                    
                    <button class="btn btn-outline" onclick="resetAIVisitNotes()" style="width: 100%; margin-top: 12px;">🔄 Новая обработка</button>
                `;
                showToast('✅ Заметки обработаны!');
            }, 1500);
        }
        
        function resetAIVisitNotes() {
            const content = document.getElementById('ai-visit-summary-content');
            content.innerHTML = `
                <div class="form-group">
                    <label class="form-label">Вставьте или введите заметки врача</label>
                    <textarea id="ai-notes-input" class="form-control" rows="6" placeholder="Например: Собака вялая 2 дня, не ест. Осмотр: температура 39.2, левое ухо красное с выделениями. Диагноз: отит. Назначен амоксициллин 500мг 2р/день 10 дней..."></textarea>
                </div>
                <button class="btn btn-primary" onclick="processAIVisitNotes()" style="width: 100%;">✨ Создать структурированный конспект</button>
            `;
        }
        
        function saveAIVisitSummary() {
            showToast('✅ Сохранено в медкарту!');
            setTimeout(() => resetAIVisitNotes(), 1000);
        }
        
        function addMedicationsToSchedule() {
            showToast('✅ Лекарства добавлены в расписание!');
        }
        
        function triggerPrescriptionUpload() {
            document.getElementById('prescription-upload').click();
        }
        
        function handlePrescriptionUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const docType = document.getElementById('ai-scanner-doc-type')?.value;
            if (!docType) {
                showToast('❌ Пожалуйста, выберите тип документа');
                event.target.value = ''; // Reset file input
                return;
            }
            
            const petSelect = document.getElementById('ai-scanner-pet-select');
            const petId = petSelect ? parseInt(petSelect.value) : (currentPet ? currentPet.id : null);
            
            showToast('⏳ AI распознает документ...');
            setTimeout(() => {
                loadExampleDoc(docType, petId);
            }, 1500);
        }
        
        function checkAISymptoms() {
            const petId = document.getElementById('ai-symptom-pet').value;
            const pet = pets.find(p => p.id == petId);
            if (!pet) return;
            
            const checkboxes = document.querySelectorAll('#ai-symptom-checker-content input[type="checkbox"]:checked');
            const symptoms = Array.from(checkboxes).map(cb => cb.value);
            const otherSymptoms = document.getElementById('ai-other-symptoms').value.trim();
            const duration = document.getElementById('ai-symptom-duration').value;
            const severity = parseInt(document.getElementById('ai-severity-slider').value);
            
            if (symptoms.length === 0 && !otherSymptoms) {
                showToast('❌ Выберите хотя бы один симптом');
                return;
            }
            
            showToast('⏳ AI анализирует симптомы...');
            
            setTimeout(() => {
                const riskLevel = severity >= 7 ? 'high' : severity >= 4 ? 'medium' : 'low';
                const riskColor = riskLevel === 'high' ? '#F44336' : riskLevel === 'medium' ? '#FFA500' : '#4CAF50';
                const riskText = riskLevel === 'high' ? 'Высокий риск' : riskLevel === 'medium' ? 'Средний риск' : 'Низкий риск';
                const riskEmoji = riskLevel === 'high' ? '🔴' : riskLevel === 'medium' ? '🟡' : '🟢';
                
                let recommendation = '';
                if (riskLevel === 'high') {
                    recommendation = 'Требуется срочная консультация ветеринара. Не откладывайте визит.';
                } else if (riskLevel === 'medium') {
                    recommendation = 'Рекомендуется записаться к ветеринару в ближайшие 24-48 часов. Следите за ухудшением симптомов.';
                } else {
                    recommendation = 'Можно наблюдать дома 24-48 часов. При ухудшении обратитесь к врачу.';
                }
                
                const content = document.getElementById('ai-symptom-checker-content');
                content.innerHTML = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 64px; margin-bottom: 12px;">${riskEmoji}</div>
                        <div style="display: inline-block; padding: 12px 24px; background: ${riskColor}20; border: 2px solid ${riskColor}; border-radius: var(--radius-lg); margin-bottom: 16px;">
                            <div style="font-size: 20px; font-weight: bold; color: ${riskColor};">${riskText}</div>
                        </div>
                    </div>
                    
                    <div class="card" style="background: var(--color-bg-1); margin-bottom: 16px;">
                        <h4 style="margin-bottom: 12px;">📋 Обнаруженные симптомы</h4>
                        <div class="symptom-tags">
                            ${symptoms.map(s => `<span class="symptom-tag">${symptomNames[s] || s}</span>`).join('')}
                            ${otherSymptoms ? `<span class="symptom-tag">${otherSymptoms}</span>` : ''}
                        </div>
                        <div style="margin-top: 12px; display: flex; justify-content: space-between;">
                            <span>Тяжесть: ${severity}/10</span>
                            <span>Длительность: ${duration}</span>
                        </div>
                    </div>
                    
                    <div class="card" style="background: var(--color-bg-3); margin-bottom: 16px;">
                        <h4 style="margin-bottom: 12px;">💡 Рекомендация</h4>
                        <p style="margin: 0;">${recommendation}</p>
                    </div>
                    
                    <div style="background: var(--color-bg-2); padding: 12px; border-radius: var(--radius-base); font-size: 13px; margin-bottom: 16px;">
                        ⚠️ <strong>Важно:</strong> Это не диагноз. AI-оценка основана на описанных симптомах. При ухудшении состояния немедленно обратитесь к ветеринару.
                    </div>
                    
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-primary" onclick="saveSymptomCheck('${pet.name}')" style="flex: 1;">💾 Сохранить в дневник</button>
                        <button class="btn btn-outline" onclick="resetSymptomChecker()">🔄 Новая проверка</button>
                    </div>
                `;
                showToast('✅ Анализ завершен!');
            }, 2000);
        }
        
        function saveSymptomCheck(petName) {
            showToast(`✅ Симптомы ${petName} сохранены!`);
            setTimeout(() => resetSymptomChecker(), 1000);
        }
        
        function resetSymptomChecker() {
            renderAIScreen();
            const content = document.getElementById('ai-symptom-checker-content');
            content.innerHTML = `
                <div class="form-group">
                    <label class="form-label">Питомец</label>
                    <select class="form-control" id="ai-symptom-pet">${pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select>
                </div>
                <div class="form-group">
                    <label class="form-label">Выберите симптомы</label>
                    <div class="checkbox-group" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                        <label class="checkbox-item"><input type="checkbox" value="lethargy"> Вялость</label>
                        <label class="checkbox-item"><input type="checkbox" value="loss_of_appetite"> Потеря аппетита</label>
                        <label class="checkbox-item"><input type="checkbox" value="vomiting"> Рвота</label>
                        <label class="checkbox-item"><input type="checkbox" value="diarrhea"> Диарея</label>
                        <label class="checkbox-item"><input type="checkbox" value="cough"> Кашель</label>
                        <label class="checkbox-item"><input type="checkbox" value="itching"> Зуд</label>
                        <label class="checkbox-item"><input type="checkbox" value="limping"> Хромота</label>
                        <label class="checkbox-item"><input type="checkbox" value="discharge"> Выделения</label>
                        <label class="checkbox-item"><input type="checkbox" value="breathing"> Одышка</label>
                        <label class="checkbox-item"><input type="checkbox" value="fever"> Температура</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Другие симптомы</label>
                    <textarea id="ai-other-symptoms" class="form-control" rows="2" placeholder="Опишите другие симптомы"></textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="form-group">
                        <label class="form-label">Длительность</label>
                        <select class="form-control" id="ai-symptom-duration">
                            <option value="hours">Несколько часов</option>
                            <option value="1day">1 день</option>
                            <option value="2-3days">2-3 дня</option>
                            <option value="week">Неделя</option>
                            <option value="longer">Больше недели</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тяжесть: <span id="ai-severity-value">5</span>/10</label>
                        <input type="range" min="1" max="10" value="5" class="form-control" id="ai-severity-slider" oninput="document.getElementById('ai-severity-value').textContent = this.value" style="padding: 0;">
                    </div>
                </div>
                <button class="btn btn-primary" onclick="checkAISymptoms()" style="width: 100%;">🔍 Оценить состояние</button>
            `;
        }
        
        function renderMoreScreen() {
            if (currentUser) {
                const nameEl = document.getElementById('more-user-name');
                const emailEl = document.getElementById('more-user-email');
                if (nameEl) nameEl.textContent = currentUser.name;
                if (emailEl) emailEl.textContent = currentUser.email;
            }
        }
        
        function editUserProfile() {
            showToast('Редактирование профиля (в разработке)');
        }
        
        function filterRecords() {
            renderAllRecords();
        }
        
        function filterRecordsByType(type) {
            // Update current filter
            currentRecordTypeFilter = type;
            
            // Update chip styling
            document.querySelectorAll('#screen-records .chip').forEach(chip => {
                chip.style.background = 'var(--color-secondary)';
                chip.style.color = 'var(--color-text)';
            });
            
            // Find and highlight the clicked chip
            if (event && event.target) {
                event.target.style.background = 'var(--color-primary)';
                event.target.style.color = 'white';
            } else {
                // Fallback: find chip by text content
                document.querySelectorAll('#screen-records .chip').forEach(chip => {
                    const chipText = chip.textContent.trim();
                    if ((type === 'all' && chipText === 'Все') ||
                        (type === 'visits' && chipText === 'Визиты') ||
                        (type === 'tests' && chipText === 'Анализы') ||
                        (type === 'vaccines' && chipText === 'Вакцины') ||
                        (type === 'medications' && chipText === 'Лекарства') ||
                        (type === 'symptoms' && chipText === 'Симптомы')) {
                        chip.style.background = 'var(--color-primary)';
                        chip.style.color = 'white';
                    }
                });
            }
            
            // Apply filter
            renderAllRecords();
        }
        
        function renderAIContent() {
            const content = document.getElementById('ai-content');
            content.innerHTML = `
                <div class="ai-summary">
                    <div class="ai-badge">✨ AI-Конспект визита</div>
                    <h3 style="margin-bottom: 12px;">Экстренный визит - 20 сентября 2024</h3>
                    <div style="margin-bottom: 16px;">
                        <strong>Питомец:</strong> Max (Golden Retriever)
                    </div>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Основная жалоба</span>
                            <span>Тряска головой, выделения из ушей</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Диагноз</span>
                            <span>Ушная инфекция</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Назначение</span>
                            <span>Амоксициллин 500мг, 2 раза в день, 10 дней</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Рекомендации</span>
                            <span>Держать уши сухими, повторный визит через 2 недели</span>
                        </div>
                    </div>
                    <div style="margin-top: 16px; padding: 12px; background: rgba(147, 51, 234, 0.1); border-radius: var(--radius-base); font-size: 12px;">
                        💡 <strong>AI-Подсказка:</strong> На основе симптомов и истории, рекомендуется регулярно проверять уши питомца, особенно после купания или плавания.
                    </div>
                </div>
                
                <div class="card" style="margin-top: 20px;">
                    <h3 style="margin-bottom: 16px;">🎙️ Транскрипция аудио визита</h3>
                    <div style="padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base); border: 1px dashed var(--color-border);">
                        <div style="text-align: center; color: var(--color-text-secondary);">
                            <div style="font-size: 32px; margin-bottom: 8px;">🎤</div>
                            <p>Здесь будет отображаться автоматическая транскрипция аудиозаписи визита к ветеринару</p>
                            <button class="btn btn-secondary btn-sm" style="margin-top: 12px;">📤 Загрузить аудио</button>
                        </div>
                    </div>
                </div>
                
                <div class="card" style="margin-top: 20px;">
                    <h3 style="margin-bottom: 16px;">📊 Структурированный анализ симптомов</h3>
                    <div style="padding: 16px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                        <div style="margin-bottom: 16px;">
                            <strong>Основной симптом:</strong>
                            <div class="symptom-tags" style="margin-top: 8px;">
                                <span class="symptom-tag">Тряска головой</span>
                            </div>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <strong>Связанные симптомы:</strong>
                            <div class="symptom-tags" style="margin-top: 8px;">
                                <span class="symptom-tag">Выделения из ушей</span>
                                <span class="symptom-tag">Дискомфорт</span>
                            </div>
                        </div>
                        <div style="margin-bottom: 16px;">
                            <strong>Прогрессия тяжести:</strong>
                            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
                                <span style="color: var(--pet-warning);">День 1: 3/10</span>
                                <span>→</span>
                                <span style="color: var(--pet-accent);">День 3: 7/10</span>
                                <span>→</span>
                                <span style="color: var(--pet-success);">После лечения: 1/10</span>
                            </div>
                        </div>
                        <div>
                            <strong>AI-Рекомендации:</strong>
                            <ul style="margin-top: 8px; padding-left: 20px; color: var(--color-text-secondary);">
                                <li>Завершить полный курс антибиотиков</li>
                                <li>Избегать воды в ушах во время купания</li>
                                <li>Регулярно осматривать уши на наличие покраснений</li>
                                <li>Записаться на контрольный осмотр через 2 недели</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="card" style="margin-top: 20px;">
                    <h3 style="margin-bottom: 16px;">💡 Персонализированные рекомендации</h3>
                    <div style="padding: 16px; background: var(--color-bg-6); border-radius: var(--radius-base);">
                        <p style="margin-bottom: 12px;"><strong>Для Golden Retriever:</strong></p>
                        <ul style="padding-left: 20px; color: var(--color-text-secondary);">
                            <li>Поддерживайте регулярный режим упражнений (30-60 мин ежедневно)</li>
                            <li>Следите за признаками дисплазии тазобедренного сустава</li>
                            <li>Поддерживайте здоровье шерсти регулярным расчёсыванием</li>
                            <li>Контролируйте вес, так как порода склонна к ожирению</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        function setupSeverityScale() {
            const options = document.querySelectorAll('.severity-option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedSeverity = parseInt(this.dataset.value);
                    document.getElementById('severity-input').value = selectedSeverity;
                });
            });
        }

        function showAddPetModal() {
            document.getElementById('add-pet-modal').classList.add('active');
        }

        function showAddRecordModal(petId) {
            if (petId) {
                currentPet = pets.find(p => p.id === petId);
            } else if (pets.length > 0) {
                currentPet = pets[0];
            }
            document.getElementById('add-record-modal').classList.add('active');
        }

        function showAddSymptomModal() {
            const select = document.getElementById('symptom-pet-select');
            select.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            document.getElementById('add-symptom-modal').classList.add('active');
        }

        function showQRPassport(petId) {
            const pet = pets.find(p => p.id === petId);
            const content = document.getElementById('qr-passport-content');
            
            content.innerHTML = `
                <div style="text-align: center;">
                    <div class="qr-code">📱</div>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Имя</span>
                            <span>${pet.name}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Порода</span>
                            <span>${pet.breed}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Возраст</span>
                            <span>${pet.age} лет</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Вес</span>
                            <span>${pet.weight} кг</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Микрочип</span>
                            <span>${'CHIP-' + Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Статус вакцинации</span>
                            <span style="color: var(--pet-success);">✓ Актуально</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 20px; width: 100%;">📥 Скачать QR-код</button>
                </div>
            `;
            
            document.getElementById('qr-passport-modal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        function addPet(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const dateOfBirth = formData.get('dateOfBirth');
            const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
            
            const newPet = {
                id: pets.length + 1,
                name: formData.get('name'),
                breed: formData.get('breed'),
                species: formData.get('species'),
                age: age,
                weight: parseFloat(formData.get('weight')),
                dateOfBirth: dateOfBirth,
                vaccinationStatus: [],
                testResults: [],
                medicalRecords: [],
                symptoms: [],
                medications: [],
                allergies: [],
                conditions: []
            };
            
            pets.push(newPet);
            renderPets();
            closeModal('add-pet-modal');
            event.target.reset();
        }

        function addMedicalRecord(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            const newRecord = {
                id: currentPet.medicalRecords.length + 1,
                date: formData.get('date'),
                clinicName: formData.get('clinicName'),
                visitType: formData.get('visitType'),
                diagnosis: formData.get('diagnosis'),
                notes: formData.get('notes'),
                medications: []
            };
            
            currentPet.medicalRecords.unshift(newRecord);
            showPetProfile(currentPet.id);
            closeModal('add-record-modal');
            event.target.reset();
        }

        function addSymptom(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const petId = parseInt(formData.get('petId'));
            const pet = pets.find(p => p.id === petId);
            
            const newSymptom = {
                id: pet.symptoms.length + 1,
                date: formData.get('date'),
                symptoms: [formData.get('symptoms')],
                severity: parseInt(formData.get('severity')),
                duration: formData.get('duration'),
                notes: formData.get('notes')
            };
            
            pet.symptoms.unshift(newSymptom);
            renderSymptoms();
            closeModal('add-symptom-modal');
            event.target.reset();
            selectedSeverity = null;
            document.querySelectorAll('.severity-option').forEach(o => o.classList.remove('selected'));
        }
        
        function showDailyStatusModal() {
            const select = document.getElementById('daily-status-pet-select');
            const dateInput = document.getElementById('daily-status-date');
            
            // Заполняем список питомцев
            select.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            
            // Устанавливаем сегодняшнюю дату по умолчанию
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
            
            // Проверяем, есть ли уже лог на сегодня для первого питомца
            if (pets.length > 0) {
                const firstPet = pets[0];
                if (firstPet.dailyStatusLogs) {
                    const todayLog = firstPet.dailyStatusLogs.find(log => log.date === today);
                    if (todayLog) {
                        // Заполняем форму существующими данными
                        select.value = firstPet.id;
                        const slider = document.getElementById('daily-status-slider');
                        const valueDisplay = document.getElementById('daily-status-value');
                        const hiddenInput = document.getElementById('daily-status-score-input');
                        
                        slider.value = todayLog.statusScore;
                        valueDisplay.textContent = todayLog.statusScore;
                        hiddenInput.value = todayLog.statusScore;
                        
                        const moodSelect = document.querySelector('#daily-status-form select[name="mood"]');
                        if (moodSelect) moodSelect.value = todayLog.mood;
                        const commentTextarea = document.querySelector('#daily-status-form textarea[name="comment"]');
                        if (commentTextarea) commentTextarea.value = todayLog.comment || '';
                    }
                }
            }
            
            document.getElementById('daily-status-modal').classList.add('active');
        }
        
        function saveDailyStatus(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const petId = parseInt(formData.get('petId'));
            const pet = pets.find(p => p.id === petId);
            
            if (!pet) {
                showToast('❌ Питомец не найден');
                return;
            }
            
            // Инициализируем массив логов, если его нет
            if (!pet.dailyStatusLogs) {
                pet.dailyStatusLogs = [];
            }
            
            const date = formData.get('date');
            const statusScore = parseInt(document.getElementById('daily-status-slider').value);
            const mood = formData.get('mood');
            const comment = formData.get('comment') || '';
            
            // Ищем существующий лог на эту дату
            const existingLogIndex = pet.dailyStatusLogs.findIndex(log => log.date === date);
            
            const statusLog = {
                date: date,
                statusScore: statusScore,
                mood: mood,
                comment: comment,
                timestamp: new Date().toISOString()
            };
            
            if (existingLogIndex >= 0) {
                // Обновляем существующий лог
                pet.dailyStatusLogs[existingLogIndex] = statusLog;
            } else {
                // Добавляем новый лог
                pet.dailyStatusLogs.unshift(statusLog);
            }
            
            // Сортируем по дате (новые сверху)
            pet.dailyStatusLogs.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            renderHomeScreen();
            closeModal('daily-status-modal');
            showToast('✅ Состояние записано!');
            event.target.reset();
        }

        function formatDate(dateString) {
            if (dateString === 'Нет записей') return dateString;
            const date = new Date(dateString);
            const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        }

        function getSeverityColor(severity) {
            if (severity <= 3) return 'rgba(76, 175, 80, 0.2)';
            if (severity <= 6) return 'rgba(255, 165, 0, 0.2)';
            return 'rgba(255, 107, 107, 0.2)';
        }

        // Close modals when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        });

        function renderNutrition() {
            renderFoodDiary();
            renderCalorieCalculator();
            renderFoodRecommendations();
        }

        function switchNutritionTab(event, tabId) {
            const tabs = event.target.parentElement.querySelectorAll('.tab');
            tabs.forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            
            const contents = document.querySelectorAll('#nutrition .tab-content');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        }

        function renderFoodDiary() {
            const content = document.getElementById('food-diary');
            const allMeals = [];
            
            pets.forEach(pet => {
                if (pet.nutritionData && pet.nutritionData.meals) {
                    pet.nutritionData.meals.forEach(meal => {
                        allMeals.push({ ...meal, petName: pet.name, petId: pet.id });
                    });
                }
            });
            
            allMeals.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            const mealTypeNames = {
                breakfast: '🌅 Завтрак',
                lunch: '☀️ Обед',
                dinner: '🌙 Ужин',
                snack: '🍪 Перекус',
                treat: '🦴 Лакомство'
            };
            
            content.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div>
                        <h3>Дневник питания</h3>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="showAddMealModal()">+ Добавить прием</button>
                </div>
                ${allMeals.length > 0 ? allMeals.map(meal => `
                    <div class="meal-entry">
                        <div class="meal-header">
                            <div>
                                <strong>${mealTypeNames[meal.mealType] || meal.mealType}</strong>
                                <div style="font-size: 12px; color: var(--color-text-secondary);">${meal.petName} • ${formatDateTime(meal.date)}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 18px; font-weight: bold; color: var(--nutrition-orange);">${meal.calories} ккал</div>
                            </div>
                        </div>
                        <div style="margin-top: 8px;">
                            <strong>${meal.foodName}</strong> • ${meal.amount} ${meal.unit}
                        </div>
                        ${meal.notes ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${meal.notes}</div>` : ''}
                    </div>
                `).join('') : '<div class="empty-state"><div class="empty-state-icon">🍽️</div><p>Нет записей о питании</p></div>'}
            `;
        }

        function renderCalorieCalculator() {
            const content = document.getElementById('calorie-calc');
            const pet = pets[0]; // Default to first pet
            
            if (!pet) {
                content.innerHTML = '<div class="empty-state"><p>Добавьте питомца для расчета калорий</p></div>';
                return;
            }
            
            const rer = 70 * Math.pow(pet.weight, 0.75);
            const multipliers = { inactive: 1.2, moderate: 1.4, active: 1.6, very_active: 1.8 };
            const recommended = Math.round(rer * (multipliers[pet.nutritionData?.activityLevel] || 1.4));
            
            content.innerHTML = `
                <div class="calorie-calculator">
                    <h3 style="margin-bottom: 20px;">Калькулятор калорий для ${pet.name}</h3>
                    <div class="form-group">
                        <label class="form-label">Текущий вес</label>
                        <input type="number" step="0.1" class="form-control" value="${pet.weight}" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Уровень активности</label>
                        <select class="form-control" id="activity-level">
                            <option value="inactive">Низкий</option>
                            <option value="moderate" selected>Умеренный</option>
                            <option value="active">Высокий</option>
                            <option value="very_active">Очень высокий</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Этап жизни</label>
                        <select class="form-control" id="life-stage">
                            <option value="puppy">Щенок/Котенок</option>
                            <option value="adult" selected>Взрослый</option>
                            <option value="senior">Пожилой</option>
                        </select>
                    </div>
                    <div class="gauge-container">
                        <div style="width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(var(--nutrition-green) 75%, var(--color-secondary) 0); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 160px; height: 160px; background: var(--color-background); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <div class="gauge-value">
                                    <div style="font-size: 36px; font-weight: bold; color: var(--nutrition-green);">${recommended}</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">ккал/день</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="background: var(--color-surface); border-radius: var(--radius-base); padding: 16px; margin-top: 20px;">
                        <h4 style="margin-bottom: 12px;">Рекомендации по питанию</h4>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Белки (30%):</span>
                            <strong>${Math.round(recommended * 0.3 / 4)}г</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Жиры (30%):</span>
                            <strong>${Math.round(recommended * 0.3 / 9)}г</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>Углеводы (40%):</span>
                            <strong>${Math.round(recommended * 0.4 / 4)}г</strong>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderFoodRecommendations() {
            const content = document.getElementById('food-recommendations');
            const pet = pets[0];
            
            if (!pet || !pet.foodRecommendations) {
                content.innerHTML = '<div class="empty-state"><p>Нет рекомендаций по корму</p></div>';
                return;
            }
            
            content.innerHTML = `
                <h3 style="margin-bottom: 20px;">Рекомендации корма для ${pet.name}</h3>
                <div class="grid">
                    ${pet.foodRecommendations.map(food => `
                        <div class="food-recommendation-card">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                <div>
                                    <h4 style="margin-bottom: 4px;">${food.brand}</h4>
                                    <div class="rating-stars">⭐ ${food.rating}/5</div>
                                </div>
                                <span class="status-badge info" style="background: var(--color-bg-2);">${food.type === 'dry' ? '🥙 Сухой' : '🥫 Влажный'}</span>
                            </div>
                            <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 8px;">
                                <strong>Состав:</strong> ${food.ingredients}
                            </div>
                            <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 12px;">
                                <strong>Польза:</strong> ${food.benefits}
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="font-weight: bold; color: var(--color-primary);">${food.price}</div>
                                <button class="btn btn-secondary btn-sm">Подробнее</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderWeightTracker() {
            const content = document.getElementById('weight-content');
            const pet = pets[0];
            
            if (!pet) {
                content.innerHTML = '<div class="empty-state"><p>Добавьте питомца</p></div>';
                return;
            }
            
            const hasGoal = pet.weightGoals && pet.weightGoals.targetWeight !== pet.weight;
            const progress = hasGoal ? Math.round(((pet.weightHistory[pet.weightHistory.length - 1].weight - pet.weight) / (pet.weightHistory[pet.weightHistory.length - 1].weight - pet.weightGoals.targetWeight)) * 100) : 0;
            
            content.innerHTML = `
                <div class="weight-goal-card" style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                        <div>
                            <h3 style="margin-bottom: 8px;">${pet.name}</h3>
                            <div style="font-size: 14px; color: var(--color-text-secondary);">${pet.breed}</div>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="showWeightGoalModal()">🎯 Установить цель</button>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 32px; font-weight: bold; color: var(--color-primary);">${pet.weight} кг</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">Текущий вес</div>
                        </div>
                        ${hasGoal ? `
                            <div style="text-align: center;">
                                <div style="font-size: 32px; font-weight: bold; color: var(--nutrition-green);">${pet.weightGoals.targetWeight} кг</div>
                                <div style="font-size: 12px; color: var(--color-text-secondary);">Целевой вес</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 32px; font-weight: bold; color: var(--pet-warning);">${progress}%</div>
                                <div style="font-size: 12px; color: var(--color-text-secondary);">Прогресс</div>
                            </div>
                        ` : '<div style="grid-column: span 2; text-align: center; color: var(--color-text-secondary);">Установите цель для отслеживания прогресса</div>'}
                    </div>
                    ${hasGoal ? `
                        <div style="background: var(--color-surface); border-radius: var(--radius-base); padding: 12px; margin-bottom: 16px;">
                            <div style="height: 8px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                <div style="width: ${progress}%; height: 100%; background: var(--nutrition-green); transition: width 0.3s;"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
                <div class="chart-container">
                    <div class="chart-title">📈 История изменения веса</div>
                    <div style="padding: 20px;">
                        ${pet.weightHistory.map((entry, index) => `
                            <div style="display: flex; justify-content: space-between; padding: 12px; background: ${index === 0 ? 'var(--color-bg-3)' : 'var(--color-bg-1)'}; border-radius: var(--radius-base); margin-bottom: 8px;">
                                <span>${formatDate(entry.date)}</span>
                                <strong>${entry.weight} кг</strong>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 12px;" onclick="showToast('Функция записи веса будет добавлена!')">📝 Записать вес</button>
                </div>
            `;
        }

        function renderNotifications() {
            const content = document.getElementById('notifications-content');
            const allNotifications = getAllNotifications();
            
            if (allNotifications.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔔</div><p>Нет уведомлений</p></div>';
                return;
            }
            
            const typeIcons = {
                vaccination: '💉',
                medication: '💊',
                appointment: '🩺',
                weight: '⚖️',
                food: '🍽️'
            };
            
            content.innerHTML = allNotifications.map(notif => `
                <div class="notification-item ${notif.priority}-priority">
                    <div style="display: flex; gap: 12px;">
                        <div style="font-size: 24px;">${typeIcons[notif.type] || '🔔'}</div>
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <strong>${notif.title}</strong>
                                <span style="font-size: 12px; color: var(--color-text-secondary);">${formatTimeUntil(notif.dueDate)}</span>
                            </div>
                            <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 8px;">${notif.description}</div>
                            <div class="notification-actions">
                                <button class="btn btn-primary btn-sm" onclick="markNotificationDone(${notif.id})">✓ Выполнено</button>
                                <button class="btn btn-secondary btn-sm" onclick="snoozeNotification(${notif.id})">⏰ Отложить</button>
                                <button class="btn btn-outline btn-sm" onclick="dismissNotification(${notif.id})">✕ Отклонить</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function getAllNotifications() {
            const allNotifications = [];
            pets.forEach(pet => {
                if (pet.notifications) {
                    pet.notifications.forEach(n => {
                        allNotifications.push({ ...n, petName: pet.name, petId: pet.id });
                    });
                }
            });
            return allNotifications.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        }

        function updateNotificationBadge() {
            const pendingCount = getAllNotifications().filter(n => n.status === 'pending').length;
            const badge = document.getElementById('notification-badge');
            if (badge) {
                badge.textContent = pendingCount;
                badge.style.display = pendingCount > 0 ? 'flex' : 'none';
            }
        }

        function showNotifications() {
            showScreen('notifications-screen');
        }

        function showAddMealModal() {
            const select = document.getElementById('meal-pet-select');
            select.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            document.getElementById('add-meal-modal').classList.add('active');
        }

        function showWeightGoalModal() {
            const select = document.getElementById('weight-goal-pet-select');
            select.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            document.getElementById('weight-goal-modal').classList.add('active');
        }

        function showExportModal() {
            const content = document.getElementById('export-content');
            content.innerHTML = `
                <div class="export-section">
                    <h3 style="margin-bottom: 16px;">📄 Генерация PDF отчета</h3>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" checked id="export-profile"> Профиль питомца
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" checked id="export-vaccinations"> История вакцинации
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" checked id="export-medical"> Медицинские записи
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" checked id="export-medications"> Текущие препараты
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="export-symptoms"> Дневник симптомов
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="export-weight"> График веса
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="export-nutrition"> Дневник питания
                        </label>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 20px;" onclick="generatePDF()">📥 Сгенерировать PDF</button>
                </div>
                <div class="export-section">
                    <h3 style="margin-bottom: 16px;">📧 Отправить по email</h3>
                    <div class="form-group">
                        <label class="form-label">Email адрес</label>
                        <input type="email" class="form-control" id="email-address" placeholder="veterinarian@clinic.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тема письма</label>
                        <input type="text" class="form-control" value="Медицинские записи для ${pets[0]?.name || 'питомца'}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Сообщение (необязательно)</label>
                        <textarea class="form-control" placeholder="Добавьте заметку для ветеринара"></textarea>
                    </div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="sendEmail()">📨 Отправить email</button>
                </div>
                <div class="export-section">
                    <h3 style="margin-bottom: 16px;">🔗 Быстрая отправка</h3>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <button class="btn btn-secondary" onclick="showToast('Ссылка скопирована!')">🔗 Поделиться ссылкой</button>
                        <button class="btn btn-secondary" onclick="showToast('Открыто окно печати')">🖨️ Печать</button>
                        <button class="btn btn-secondary" onclick="showToast('Экспорт в облако')">☁️ В облако</button>
                    </div>
                </div>
            `;
            document.getElementById('export-modal').classList.add('active');
        }

        function showNotificationSettings() {
            const pet = pets[0];
            const settings = pet.notificationSettings || {};
            
            const content = document.getElementById('notification-settings-content');
            content.innerHTML = `
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.vaccinations ? 'checked' : ''}> Напоминания о вакцинации
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.medications ? 'checked' : ''}> Напоминания о препаратах
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.appointments ? 'checked' : ''}> Напоминания о визитах
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.weightChecks ? 'checked' : ''}> Напоминания о весе
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.feedingReminders ? 'checked' : ''}> Напоминания о кормлении
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-item">
                        <input type="checkbox" ${settings.symptomCheckIns ? 'checked' : ''}> Проверка симптомов
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">Тихие часы</label>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <input type="time" class="form-control" value="${settings.quietHoursStart || '22:00'}">
                        <span>—</span>
                        <input type="time" class="form-control" value="${settings.quietHoursEnd || '08:00'}">
                    </div>
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="saveNotificationSettings()">Сохранить настройки</button>
            `;
            document.getElementById('notification-settings-modal').classList.add('active');
        }

        function addMeal(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const petId = parseInt(formData.get('petId'));
            const pet = pets.find(p => p.id === petId);
            
            if (!pet.nutritionData) pet.nutritionData = { meals: [], dailyCalorieGoal: 1000 };
            
            const newMeal = {
                id: pet.nutritionData.meals.length + 1,
                date: formData.get('datetime'),
                foodName: formData.get('foodName'),
                amount: parseFloat(formData.get('amount')),
                unit: formData.get('unit'),
                calories: parseInt(formData.get('calories')),
                protein: formData.get('protein') ? parseFloat(formData.get('protein')) : null,
                fat: formData.get('fat') ? parseFloat(formData.get('fat')) : null,
                carbs: formData.get('carbs') ? parseFloat(formData.get('carbs')) : null,
                mealType: formData.get('mealType'),
                notes: formData.get('notes')
            };
            
            pet.nutritionData.meals.unshift(newMeal);
            renderNutrition();
            renderNutritionWeightScreen();
            renderQuickStats();
            closeModal('add-meal-modal');
            showToast('🍽️ Прием пищи добавлен!');
            event.target.reset();
        }

        function setWeightGoal(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const petId = parseInt(formData.get('petId'));
            const pet = pets.find(p => p.id === petId);
            
            pet.weightGoals = {
                targetWeight: parseFloat(formData.get('targetWeight')),
                targetDate: formData.get('targetDate'),
                goalType: formData.get('goalType'),
                weeklyRate: parseFloat(formData.get('weeklyRate'))
            };
            
            renderWeightTracker();
            renderNutritionWeightScreen();
            renderQuickStats();
            closeModal('weight-goal-modal');
            showToast('🎯 Цель по весу установлена!');
            event.target.reset();
        }

        function addWeightEntry(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const petId = parseInt(formData.get('petId'));
            const pet = pets.find(p => p.id === petId);
            
            if (!pet) {
                showToast('❌ Питомец не найден');
                return;
            }
            
            if (!pet.weightHistory) {
                pet.weightHistory = [];
            }
            
            const newEntry = {
                date: formData.get('date'),
                weight: parseFloat(formData.get('weight')),
                notes: formData.get('notes') || ''
            };
            
            // Update current weight
            pet.weight = newEntry.weight;
            
            // Add to history
            pet.weightHistory.unshift(newEntry);
            
            // Sort by date
            pet.weightHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            renderWeightTracker();
            renderNutritionWeightScreen();
            renderQuickStats();
            closeModal('add-weight-modal');
            showToast('⚖️ Вес записан!');
            event.target.reset();
        }

        function showAddWeightModal() {
            const select = document.getElementById('add-weight-pet-select');
            select.innerHTML = pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            document.getElementById('add-weight-modal').classList.add('active');
        }

        function renderNutritionWeightScreen() {
            const petSelect = document.getElementById('nutrition-pet-select');
            const selectedPetId = petSelect ? petSelect.value : 'all';
            
            // Update pet select
            if (petSelect) {
                petSelect.innerHTML = '<option value="all">Все питомцы</option>' + 
                    pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
                if (selectedPetId !== 'all') {
                    petSelect.value = selectedPetId;
                }
            }
            
            // Render all tabs content
            renderNutrition(selectedPetId);
            renderWeightTracker(selectedPetId);
            
            // Render analytics only if analytics tab is active
            const analyticsTab = document.getElementById('analytics');
            if (analyticsTab && analyticsTab.classList.contains('active')) {
                renderNutritionAnalytics(selectedPetId);
            }
        }

        function switchNutritionTab(event, tabId) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            // Update tab states
            const tabsContainer = document.querySelector('#screen-nutrition-weight .tabs');
            if (tabsContainer) {
                const tabs = tabsContainer.querySelectorAll('.tab');
                tabs.forEach(t => t.classList.remove('active'));
                
                // Find and activate the correct tab
                tabs.forEach(t => {
                    if ((tabId === 'nutrition-overview' && t.textContent.includes('Питание')) ||
                        (tabId === 'weight-overview' && t.textContent.includes('Вес')) ||
                        (tabId === 'analytics' && t.textContent.includes('Аналитика'))) {
                        t.classList.add('active');
                    }
                });
            }
            
            // Update tab content visibility
            const contents = document.querySelectorAll('#screen-nutrition-weight .tab-content');
            contents.forEach(c => {
                c.classList.remove('active');
            });
            
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Render content when switching tabs
            const petSelect = document.getElementById('nutrition-pet-select');
            const selectedPetId = petSelect ? petSelect.value : 'all';
            
            // Render immediately with a small delay to ensure DOM is ready
            setTimeout(() => {
                if (tabId === 'nutrition-overview') {
                    renderNutrition(selectedPetId);
                } else if (tabId === 'weight-overview') {
                    renderWeightTracker(selectedPetId);
                } else if (tabId === 'analytics') {
                    // Render analytics - ensure element is visible
                    const analyticsContent = document.getElementById('analytics-content');
                    if (analyticsContent) {
                        renderNutritionAnalytics(selectedPetId);
                    } else {
                        console.error('analytics-content not found when switching to analytics tab');
                    }
                }
            }, 10);
        }

        function renderNutrition(selectedPetId = 'all') {
            const content = document.getElementById('nutrition-content');
            const selectedPets = selectedPetId === 'all' ? pets : pets.filter(p => p.id == selectedPetId);
            
            if (selectedPets.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🍽️</div><p>Нет питомцев</p></div>';
                return;
            }
            
            // Calculate today's calories and macros
            const today = new Date().toISOString().split('T')[0];
            let totalCalories = 0;
            let totalProtein = 0;
            let totalFat = 0;
            let totalCarbs = 0;
            let totalGoal = 0;
            const petCalories = {};
            
            selectedPets.forEach(pet => {
                if (pet.nutritionData) {
                    const goal = pet.nutritionData.dailyCalorieGoal || 0;
                    totalGoal += goal;
                    
                    let consumed = 0;
                    let protein = 0;
                    let fat = 0;
                    let carbs = 0;
                    
                    pet.nutritionData.meals.forEach(meal => {
                        if (meal.date.startsWith(today)) {
                            consumed += meal.calories || 0;
                            protein += meal.protein || 0;
                            fat += meal.fat || 0;
                            carbs += meal.carbs || 0;
                        }
                    });
                    
                    totalCalories += consumed;
                    totalProtein += protein;
                    totalFat += fat;
                    totalCarbs += carbs;
                    petCalories[pet.id] = { consumed, goal, pet, protein, fat, carbs };
                }
            });
            
            const percent = totalGoal > 0 ? Math.round((totalCalories / totalGoal) * 100) : 0;
            
            // Get last 7 days of meals
            const last7Days = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                
                let dayCalories = 0;
                selectedPets.forEach(pet => {
                    if (pet.nutritionData && pet.nutritionData.meals) {
                        pet.nutritionData.meals.forEach(meal => {
                            if (meal.date.startsWith(dateStr)) {
                                dayCalories += meal.calories || 0;
                            }
                        });
                    }
                });
                
                last7Days.push({
                    date: dateStr,
                    calories: dayCalories,
                    label: date.toLocaleDateString('ru', { weekday: 'short', day: 'numeric' })
                });
            }
            
            const maxCalories = Math.max(...last7Days.map(d => d.calories), totalGoal, 100);
            
            content.innerHTML = `
                <!-- Today's Summary -->
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 16px;">📊 Сегодня</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px; margin-bottom: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: var(--nutrition-orange);">${totalCalories}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Ккал</div>
                            <div style="font-size: 10px; color: var(--color-text-secondary); margin-top: 2px;">из ${totalGoal}</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: var(--color-primary);">${totalProtein.toFixed(1)}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Белки (г)</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: var(--pet-warning);">${totalFat.toFixed(1)}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Жиры (г)</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: var(--nutrition-green);">${totalCarbs.toFixed(1)}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Углеводы (г)</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: ${percent >= 100 ? 'var(--nutrition-green)' : percent >= 80 ? 'var(--pet-warning)' : 'var(--color-text-secondary)'};">${percent}%</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Прогресс</div>
                        </div>
                    </div>
                    <div style="background: var(--color-surface); border-radius: var(--radius-base); padding: 12px;">
                        <div style="height: 12px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                            <div style="width: ${Math.min(percent, 100)}%; height: 100%; background: ${percent >= 100 ? 'var(--nutrition-green)' : 'var(--nutrition-orange)'}; transition: width 0.3s;"></div>
                        </div>
                    </div>
                </div>

                <!-- Per Pet Breakdown -->
                ${selectedPets.length > 1 ? `
                    <div class="card" style="margin-bottom: 24px;">
                        <h3 style="margin-bottom: 16px;">По питомцам</h3>
                        ${Object.values(petCalories).map(({ consumed, goal, pet, protein, fat, carbs }) => {
                            const petPercent = goal > 0 ? Math.round((consumed / goal) * 100) : 0;
                            const hasMacros = (protein && protein > 0) || (fat && fat > 0) || (carbs && carbs > 0);
                            return `
                                <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--color-card-border);">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <strong>${pet.name}</strong>
                                        <span>${consumed} / ${goal} ккал</span>
                                    </div>
                                    ${hasMacros ? `
                                    <div style="display: flex; gap: 12px; margin-bottom: 8px; font-size: 11px; color: var(--color-text-secondary);">
                                        ${protein && protein > 0 ? `<div><span style="color: var(--color-primary);">Б:</span> ${protein.toFixed(1)}г</div>` : ''}
                                        ${fat && fat > 0 ? `<div><span style="color: var(--pet-warning);">Ж:</span> ${fat.toFixed(1)}г</div>` : ''}
                                        ${carbs && carbs > 0 ? `<div><span style="color: var(--nutrition-green);">У:</span> ${carbs.toFixed(1)}г</div>` : ''}
                                    </div>
                                    ` : ''}
                                    <div style="height: 8px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                        <div style="width: ${Math.min(petPercent, 100)}%; height: 100%; background: var(--nutrition-orange);"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                <!-- 7 Days Chart -->
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 16px;">📈 Калории за неделю</h3>
                    <div style="display: flex; align-items: flex-end; gap: 8px; height: 200px; padding: 20px 0;">
                        ${last7Days.map(day => {
                            const height = maxCalories > 0 ? (day.calories / maxCalories) * 100 : 0;
                            const isToday = day.date === today;
                            return `
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                                    <div style="flex: 1; display: flex; align-items: flex-end; width: 100%;">
                                        <div style="width: 100%; background: ${isToday ? 'var(--color-primary)' : 'var(--nutrition-orange)'}; border-radius: var(--radius-base) var(--radius-base) 0 0; height: ${height}%; min-height: ${day.calories > 0 ? '4px' : '0'}; transition: height 0.3s;"></div>
                                    </div>
                                    <div style="font-size: 11px; color: var(--color-text-secondary); text-align: center; transform: rotate(-45deg); transform-origin: center; white-space: nowrap;">${day.label}</div>
                                    <div style="font-size: 10px; color: var(--color-text-secondary); text-align: center; margin-top: 4px;">${day.calories}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Recent Meals -->
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3>Последние приемы пищи</h3>
                        <button class="btn btn-primary btn-sm" onclick="showAddMealModal()">+ Добавить</button>
                    </div>
                    ${renderRecentMeals(selectedPets)}
                </div>
            `;
        }

        function renderRecentMeals(selectedPets) {
            const allMeals = [];
            selectedPets.forEach(pet => {
                if (pet.nutritionData && pet.nutritionData.meals) {
                    pet.nutritionData.meals.slice(0, 10).forEach(meal => {
                        allMeals.push({ ...meal, petName: pet.name, petId: pet.id });
                    });
                }
            });
            
            allMeals.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            const mealTypeNames = {
                breakfast: '🌅 Завтрак',
                lunch: '☀️ Обед',
                dinner: '🌙 Ужин',
                snack: '🍪 Перекус',
                treat: '🦴 Лакомство'
            };
            
            if (allMeals.length === 0) {
                return '<div class="empty-state"><div class="empty-state-icon">🍽️</div><p>Нет записей о питании</p></div>';
            }
            
            return allMeals.slice(0, 10).map(meal => {
                const hasMacros = meal.protein !== null && meal.protein !== undefined || meal.fat !== null && meal.fat !== undefined || meal.carbs !== null && meal.carbs !== undefined;
                return `
                <div class="meal-entry">
                    <div class="meal-header">
                        <div>
                            <strong>${mealTypeNames[meal.mealType] || meal.mealType}</strong>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">${meal.petName} • ${formatDateTime(meal.date)}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 18px; font-weight: bold; color: var(--nutrition-orange);">${meal.calories} ккал</div>
                        </div>
                    </div>
                    <div style="margin-top: 8px;">
                        <strong>${meal.foodName}</strong> • ${meal.amount} ${meal.unit}
                    </div>
                    ${hasMacros ? `
                    <div style="display: flex; gap: 12px; margin-top: 8px; padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-sm); font-size: 11px;">
                        ${meal.protein !== null && meal.protein !== undefined ? `<div><span style="color: var(--color-primary); font-weight: 500;">Б:</span> ${meal.protein.toFixed(1)}г</div>` : ''}
                        ${meal.fat !== null && meal.fat !== undefined ? `<div><span style="color: var(--pet-warning); font-weight: 500;">Ж:</span> ${meal.fat.toFixed(1)}г</div>` : ''}
                        ${meal.carbs !== null && meal.carbs !== undefined ? `<div><span style="color: var(--nutrition-green); font-weight: 500;">У:</span> ${meal.carbs.toFixed(1)}г</div>` : ''}
                    </div>
                    ` : ''}
                    ${meal.notes ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${meal.notes}</div>` : ''}
                </div>
            `;
            }).join('');
        }

        function renderWeightTracker(selectedPetId = 'all') {
            const content = document.getElementById('weight-content');
            const selectedPets = selectedPetId === 'all' ? pets : pets.filter(p => p.id == selectedPetId);
            
            if (selectedPets.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚖️</div><p>Нет питомцев</p></div>';
                return;
            }
            
            if (selectedPets.length === 1) {
                // Single pet view with detailed chart
                const pet = selectedPets[0];
                renderSinglePetWeight(pet, content);
            } else {
                // Multiple pets view
                content.innerHTML = selectedPets.map(pet => renderPetWeightCard(pet)).join('');
            }
        }

        function renderSinglePetWeight(pet, content) {
            const hasGoal = pet.weightGoals && pet.weightGoals.targetWeight;
            const currentWeight = pet.weightHistory && pet.weightHistory.length > 0 
                ? pet.weightHistory[0].weight 
                : pet.weight;
            
            let progress = 0;
            if (hasGoal) {
                const startWeight = pet.weightHistory && pet.weightHistory.length > 0 
                    ? pet.weightHistory[pet.weightHistory.length - 1].weight 
                    : currentWeight;
                const diff = Math.abs(currentWeight - hasGoal);
                const totalDiff = Math.abs(startWeight - hasGoal);
                progress = totalDiff > 0 ? Math.round((1 - diff / totalDiff) * 100) : 0;
            }
            
            // Prepare chart data
            const chartData = (pet.weightHistory || []).slice(0, 30).reverse();
            const weights = chartData.map(e => e.weight);
            const minWeight = Math.min(...weights, currentWeight);
            const maxWeight = Math.max(...weights, currentWeight);
            const range = maxWeight - minWeight || 1;
            
            content.innerHTML = `
                <div class="weight-goal-card" style="margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                        <div>
                            <h3 style="margin-bottom: 8px;">${pet.name}</h3>
                            <div style="font-size: 14px; color: var(--color-text-secondary);">${pet.breed}</div>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="showWeightGoalModal()">🎯 Установить цель</button>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 36px; font-weight: bold; color: var(--color-primary);">${currentWeight.toFixed(1)}</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">Текущий вес (кг)</div>
                        </div>
                        ${hasGoal ? `
                            <div style="text-align: center;">
                                <div style="font-size: 36px; font-weight: bold; color: var(--nutrition-green);">${pet.weightGoals.targetWeight}</div>
                                <div style="font-size: 12px; color: var(--color-text-secondary);">Целевой вес (кг)</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 36px; font-weight: bold; color: var(--pet-warning);">${Math.max(0, progress)}%</div>
                                <div style="font-size: 12px; color: var(--color-text-secondary);">Прогресс</div>
                            </div>
                        ` : '<div style="grid-column: span 2; text-align: center; color: var(--color-text-secondary); padding-top: 20px;">Установите цель для отслеживания прогресса</div>'}
                    </div>
                    ${hasGoal ? `
                        <div style="background: var(--color-surface); border-radius: var(--radius-base); padding: 12px; margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 12px; color: var(--color-text-secondary);">
                                <span>Прогресс к цели</span>
                                <span>${Math.max(0, progress)}%</span>
                            </div>
                            <div style="height: 12px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                <div style="width: ${Math.max(0, Math.min(100, progress))}%; height: 100%; background: var(--nutrition-green); transition: width 0.3s;"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- Weight Chart -->
                <div class="card" style="margin-bottom: 24px;">
                    <div class="chart-title">📈 График изменения веса</div>
                    ${chartData.length > 0 ? `
                        <div style="padding: 20px;">
                            <div style="position: relative; height: 250px; margin-bottom: 20px;">
                                <svg style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
                                    ${hasGoal ? `
                                        <line x1="0" y1="${((maxWeight - pet.weightGoals.targetWeight) / range) * 100}%" 
                                              x2="100%" y2="${((maxWeight - pet.weightGoals.targetWeight) / range) * 100}%" 
                                              stroke="var(--nutrition-green)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                                    ` : ''}
                                    <polyline 
                                        points="${chartData.map((entry, i) => {
                                            const x = (i / (chartData.length - 1 || 1)) * 100;
                                            const y = ((maxWeight - entry.weight) / range) * 100;
                                            return `${x}%,${y}%`;
                                        }).join(' ')}"
                                        fill="none"
                                        stroke="var(--color-primary)"
                                        stroke-width="3"
                                    />
                                    ${chartData.map((entry, i) => {
                                        const x = (i / (chartData.length - 1 || 1)) * 100;
                                        const y = ((maxWeight - entry.weight) / range) * 100;
                                        return `<circle cx="${x}%" cy="${y}%" r="4" fill="var(--color-primary)"/>`;
                                    }).join('')}
                                </svg>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--color-text-secondary);">
                                <span>${formatDate(chartData[0].date)}</span>
                                <span>${formatDate(chartData[chartData.length - 1].date)}</span>
                            </div>
                        </div>
                    ` : '<div class="empty-state"><p>Нет данных для графика</p></div>'}
                    <button class="btn btn-primary" style="width: 100%;" onclick="showAddWeightModal()">📝 Записать вес</button>
                </div>

                <!-- Weight History -->
                <div class="card">
                    <h3 style="margin-bottom: 16px;">История взвешиваний</h3>
                    ${pet.weightHistory && pet.weightHistory.length > 0 ? `
                        <div style="max-height: 400px; overflow-y: auto;">
                            ${pet.weightHistory.map((entry, index) => `
                                <div style="display: flex; justify-content: space-between; padding: 12px; background: ${index === 0 ? 'var(--color-bg-3)' : 'var(--color-bg-1)'}; border-radius: var(--radius-base); margin-bottom: 8px;">
                                    <div>
                                        <div style="font-weight: 500;">${formatDate(entry.date)}</div>
                                        ${entry.notes ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${entry.notes}</div>` : ''}
                                    </div>
                                    <div style="font-size: 20px; font-weight: bold; color: var(--color-primary);">${entry.weight} кг</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : '<div class="empty-state"><p>Нет записей о весе</p></div>'}
                </div>
            `;
        }

        function renderPetWeightCard(pet) {
            const currentWeight = pet.weightHistory && pet.weightHistory.length > 0 
                ? pet.weightHistory[0].weight 
                : pet.weight;
            const hasGoal = pet.weightGoals && pet.weightGoals.targetWeight;
            
            return `
                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 12px;">${pet.name}</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: var(--color-primary);">${currentWeight.toFixed(1)}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary);">Текущий вес</div>
                        </div>
                        ${hasGoal ? `
                            <div style="text-align: center;">
                                <div style="font-size: 28px; font-weight: bold; color: var(--nutrition-green);">${pet.weightGoals.targetWeight}</div>
                                <div style="font-size: 11px; color: var(--color-text-secondary);">Цель</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 28px; font-weight: bold; color: var(--pet-warning);">${pet.weightGoals.goalType === 'lose' ? '↓' : pet.weightGoals.goalType === 'gain' ? '↑' : '→'}</div>
                                <div style="font-size: 11px; color: var(--color-text-secondary);">Тренд</div>
                            </div>
                        ` : '<div style="grid-column: span 2; text-align: center; color: var(--color-text-secondary); font-size: 12px; padding-top: 10px;">Нет цели</div>'}
                    </div>
                </div>
            `;
        }

        function renderNutritionAnalytics(selectedPetId = 'all') {
            const content = document.getElementById('analytics-content');
            if (!content) {
                console.error('analytics-content element not found');
                // Try to find it again after a short delay
                setTimeout(() => {
                    const retryContent = document.getElementById('analytics-content');
                    if (retryContent) {
                        renderNutritionAnalytics(selectedPetId);
                    }
                }, 100);
                return;
            }
            
            const selectedPets = selectedPetId === 'all' ? pets : pets.filter(p => p.id == selectedPetId);
            
            if (selectedPets.length === 0) {
                content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📊</div><p>Нет данных для анализа</p></div>';
                return;
            }
            
            // Calculate statistics
            let totalMeals = 0;
            let totalCalories = 0;
            let totalProtein = 0;
            let totalFat = 0;
            let totalCarbs = 0;
            let avgDailyCalories = 0;
            let weightEntries = 0;
            const last30Days = [];
            const mealTypes = { breakfast: 0, lunch: 0, dinner: 0, snack: 0, treat: 0 };
            const foodFrequency = {};
            const weightData = [];
            const today = new Date().toISOString().split('T')[0];
            
            // Get all meals from last 30 days
            for (let i = 29; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                
                let dayCalories = 0;
                let dayProtein = 0;
                let dayFat = 0;
                let dayCarbs = 0;
                
                selectedPets.forEach(pet => {
                    if (pet.nutritionData && pet.nutritionData.meals) {
                        pet.nutritionData.meals.forEach(meal => {
                            if (meal.date && typeof meal.date === 'string' && meal.date.startsWith(dateStr)) {
                                dayCalories += meal.calories || 0;
                                dayProtein += meal.proteins || 0;
                                dayFat += meal.fats || 0;
                                dayCarbs += meal.carbohydrates || 0;
                                totalMeals++;
                                totalCalories += meal.calories || 0;
                                totalProtein += meal.proteins || 0;
                                totalFat += meal.fats || 0;
                                totalCarbs += meal.carbohydrates || 0;
                                
                                // Count meal types
                                if (meal.mealType && mealTypes.hasOwnProperty(meal.mealType)) {
                                    mealTypes[meal.mealType]++;
                                }
                                
                                // Count food frequency
                                if (meal.foodName) {
                                    foodFrequency[meal.foodName] = (foodFrequency[meal.foodName] || 0) + 1;
                                }
                            }
                        });
                    }
                    
                    // Collect weight data
                    if (pet.weightHistory) {
                        pet.weightHistory.forEach(entry => {
                            if (entry.date && entry.date === dateStr) {
                                weightEntries++;
                                weightData.push({
                                    date: dateStr,
                                    weight: entry.weight,
                                    petName: pet.name
                                });
                            }
                        });
                    }
                });
                
                last30Days.push({ 
                    date: dateStr, 
                    calories: dayCalories,
                    protein: dayProtein,
                    fat: dayFat,
                    carbs: dayCarbs
                });
            }
            
            avgDailyCalories = last30Days.length > 0 
                ? Math.round(last30Days.reduce((sum, d) => sum + d.calories, 0) / last30Days.length)
                : 0;
            
            const avgDailyProtein = last30Days.length > 0 
                ? (last30Days.reduce((sum, d) => sum + d.protein, 0) / last30Days.length).toFixed(1)
                : 0;
            
            const avgDailyFat = last30Days.length > 0 
                ? (last30Days.reduce((sum, d) => sum + d.fat, 0) / last30Days.length).toFixed(1)
                : 0;
            
            const avgDailyCarbs = last30Days.length > 0 
                ? (last30Days.reduce((sum, d) => sum + d.carbs, 0) / last30Days.length).toFixed(1)
                : 0;
            
            // Get top foods
            const topFoods = Object.entries(foodFrequency)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);
            
            // Calculate weight trend
            let weightTrend = '';
            let weightChange = 0;
            if (weightData.length >= 2) {
                const sortedWeights = weightData.sort((a, b) => new Date(a.date) - new Date(b.date));
                const firstWeight = sortedWeights[0].weight;
                const lastWeight = sortedWeights[sortedWeights.length - 1].weight;
                weightChange = lastWeight - firstWeight;
                weightTrend = weightChange > 0 ? '📈' : weightChange < 0 ? '📉' : '➡️';
            }
            
            // Calculate goal progress
            let totalGoal = 0;
            let totalConsumed = 0;
            selectedPets.forEach(pet => {
                if (pet.nutritionData && pet.nutritionData.dailyCalorieGoal) {
                    totalGoal += pet.nutritionData.dailyCalorieGoal;
                }
                const todayMeals = (pet.nutritionData && pet.nutritionData.meals) ? 
                    pet.nutritionData.meals.filter(m => m.date && m.date.startsWith(today)) : [];
                todayMeals.forEach(meal => {
                    totalConsumed += meal.calories || 0;
                });
            });
            const goalProgress = totalGoal > 0 ? Math.round((totalConsumed / totalGoal) * 100) : 0;
            
            const maxCal = Math.max(...last30Days.map(d => d.calories), 1);
            const maxWeight = weightData.length > 0 ? Math.max(...weightData.map(w => w.weight)) : 0;
            const minWeight = weightData.length > 0 ? Math.min(...weightData.map(w => w.weight)) : 0;
            const weightRange = maxWeight - minWeight;
            
            content.innerHTML = `
                <!-- Summary Stats -->
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">📊 Общая статистика (30 дней)</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
                        <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 3px solid var(--nutrition-orange);">
                            <div style="font-size: 28px; font-weight: bold; color: var(--nutrition-orange);">${totalMeals}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">Приемов пищи</div>
                        </div>
                        <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 3px solid var(--color-primary);">
                            <div style="font-size: 28px; font-weight: bold; color: var(--color-primary);">${totalCalories.toLocaleString()}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">Всего ккал</div>
                        </div>
                        <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 3px solid var(--nutrition-green);">
                            <div style="font-size: 28px; font-weight: bold; color: var(--nutrition-green);">${avgDailyCalories}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">Среднее/день</div>
                        </div>
                        <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base); border-left: 3px solid var(--pet-warning);">
                            <div style="font-size: 28px; font-weight: bold; color: var(--pet-warning);">${weightEntries}</div>
                            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">Записей веса</div>
                        </div>
                    </div>
                </div>

                <!-- BZHU Stats -->
                ${(totalProtein > 0 || totalFat > 0 || totalCarbs > 0) ? `
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">🥗 Средние показатели БЖУ (в день)</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                        <div style="text-align: center; padding: 16px; background: linear-gradient(135deg, var(--color-primary)15, var(--color-primary)05); border-radius: var(--radius-base); border: 1px solid var(--color-primary)30;">
                            <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${avgDailyProtein}г</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">Белки</div>
                        </div>
                        <div style="text-align: center; padding: 16px; background: linear-gradient(135deg, var(--pet-warning)15, var(--pet-warning)05); border-radius: var(--radius-base); border: 1px solid var(--pet-warning)30;">
                            <div style="font-size: 24px; font-weight: bold; color: var(--pet-warning);">${avgDailyFat}г</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">Жиры</div>
                        </div>
                        <div style="text-align: center; padding: 16px; background: linear-gradient(135deg, var(--nutrition-green)15, var(--nutrition-green)05); border-radius: var(--radius-base); border: 1px solid var(--nutrition-green)30;">
                            <div style="font-size: 24px; font-weight: bold; color: var(--nutrition-green);">${avgDailyCarbs}г</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">Углеводы</div>
                        </div>
                    </div>
                </div>
                ` : ''}

                <!-- Goal Progress -->
                ${totalGoal > 0 ? `
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 16px;">🎯 Прогресс по целям (сегодня)</h3>
                    <div style="padding: 16px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Калории</span>
                            <strong>${totalConsumed} / ${totalGoal} ккал</strong>
                        </div>
                        <div style="height: 12px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                            <div style="width: ${Math.min(goalProgress, 100)}%; height: 100%; background: ${goalProgress >= 100 ? 'var(--nutrition-green)' : 'var(--nutrition-orange)'}; transition: width 0.3s;"></div>
                        </div>
                        <div style="text-align: center; margin-top: 8px; font-size: 14px; font-weight: bold; color: ${goalProgress >= 100 ? 'var(--nutrition-green)' : 'var(--color-primary)'};">
                            ${goalProgress}%
                        </div>
                    </div>
                </div>
                ` : ''}

                <!-- Calories Chart -->
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">📈 Калории за 30 дней</h3>
                    <div style="display: flex; align-items: flex-end; gap: 3px; height: 200px; padding: 20px 0; border-bottom: 1px solid var(--color-card-border);">
                        ${last30Days.map((day, idx) => {
                            const height = maxCal > 0 ? (day.calories / maxCal) * 100 : 0;
                            const isToday = day.date === today;
                            const date = new Date(day.date);
                            const dayLabel = date.getDate();
                            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                            return `
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative;">
                                    <div style="flex: 1; display: flex; align-items: flex-end; width: 100%;">
                                        <div style="width: 100%; background: ${isToday ? 'var(--color-primary)' : isWeekend ? 'var(--nutrition-orange)' : 'var(--nutrition-orange)'}; border-radius: 3px 3px 0 0; height: ${height}%; min-height: ${day.calories > 0 ? '3px' : '0'}; opacity: ${isToday ? '1' : '0.7'}; transition: all 0.3s;" title="${day.date}: ${day.calories} ккал"></div>
                                    </div>
                                    ${idx % 5 === 0 ? `<div style="font-size: 9px; color: var(--color-text-secondary); margin-top: 4px; transform: rotate(-45deg); transform-origin: center;">${dayLabel}</div>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 12px; font-size: 11px; color: var(--color-text-secondary);">
                        <span>${last30Days[0]?.date ? formatDate(last30Days[0].date) : ''}</span>
                        <span>${last30Days[last30Days.length - 1]?.date ? formatDate(last30Days[last30Days.length - 1].date) : ''}</span>
                    </div>
                </div>

                <!-- Weight Trend -->
                ${weightData.length > 0 ? `
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">⚖️ Динамика веса</h3>
                    <div style="display: flex; align-items: flex-end; gap: 3px; height: 150px; padding: 20px 0; border-bottom: 1px solid var(--color-card-border); position: relative;">
                        ${weightData.sort((a, b) => new Date(a.date) - new Date(b.date)).map((entry, idx, arr) => {
                            const height = weightRange > 0 ? ((entry.weight - minWeight) / weightRange) * 100 : 50;
                            const prevEntry = arr[idx - 1];
                            const isIncreasing = prevEntry && entry.weight > prevEntry.weight;
                            return `
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative;">
                                    <div style="flex: 1; display: flex; align-items: flex-end; width: 100%;">
                                        <div style="width: 100%; background: ${isIncreasing ? 'var(--pet-warning)' : 'var(--nutrition-green)'}; border-radius: 3px 3px 0 0; height: ${height}%; min-height: 3px; opacity: 0.8;" title="${formatDate(entry.date)}: ${entry.weight} кг"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 12px;">
                        <div>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">Изменение за период</div>
                            <div style="font-size: 18px; font-weight: bold; color: ${weightChange > 0 ? 'var(--pet-warning)' : weightChange < 0 ? 'var(--nutrition-green)' : 'var(--color-text-secondary)'};">
                                ${weightTrend} ${weightChange > 0 ? '+' : ''}${weightChange.toFixed(1)} кг
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 12px; color: var(--color-text-secondary);">Диапазон</div>
                            <div style="font-size: 14px; font-weight: bold;">${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} кг</div>
                        </div>
                    </div>
                </div>
                ` : ''}

                <!-- Meal Types Distribution -->
                ${Object.values(mealTypes).some(v => v > 0) ? `
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 20px;">🍽️ Распределение по типам приема пищи</h3>
                    <div style="display: grid; gap: 12px;">
                        ${Object.entries(mealTypes).map(([type, count]) => {
                            if (count === 0) return '';
                            const totalMealTypes = Object.values(mealTypes).reduce((sum, v) => sum + v, 0);
                            const percent = totalMealTypes > 0 ? Math.round((count / totalMealTypes) * 100) : 0;
                            const typeNames = {
                                breakfast: 'Завтрак',
                                lunch: 'Обед',
                                dinner: 'Ужин',
                                snack: 'Перекус',
                                treat: 'Лакомство'
                            };
                            const emojis = {
                                breakfast: '🌅',
                                lunch: '☀️',
                                dinner: '🌙',
                                snack: '🍎',
                                treat: '🍖'
                            };
                            return `
                                <div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                        <span style="font-size: 13px;">${emojis[type] || ''} ${typeNames[type] || type}</span>
                                        <span style="font-size: 13px; font-weight: bold;">${count} (${percent}%)</span>
                                    </div>
                                    <div style="height: 8px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                        <div style="width: ${percent}%; height: 100%; background: var(--nutrition-orange);"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Top Foods -->
                ${topFoods.length > 0 ? `
                <div class="card">
                    <h3 style="margin-bottom: 20px;">🏆 Самые популярные корма</h3>
                    <div style="display: grid; gap: 12px;">
                        ${topFoods.map(([food, count], idx) => {
                            const maxCount = topFoods[0][1];
                            const percent = maxCount > 0 ? Math.round((count / maxCount) * 100) : 0;
                            return `
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="width: 32px; height: 32px; border-radius: var(--radius-full); background: var(--color-bg-2); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: var(--color-primary);">
                                        ${idx + 1}
                                    </div>
                                    <div style="flex: 1;">
                                        <div style="font-weight: 500; margin-bottom: 4px;">${food}</div>
                                        <div style="height: 6px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden;">
                                            <div style="width: ${percent}%; height: 100%; background: var(--nutrition-orange);"></div>
                                        </div>
                                    </div>
                                    <div style="font-size: 14px; font-weight: bold; color: var(--color-primary);">
                                        ${count}x
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                ` : ''}
            `;
        }

        function generatePDF() {
            showToast('⏳ Генерация PDF...');
            setTimeout(() => {
                showToast('✅ PDF готов к скачиванию!');
            }, 2000);
        }

        function sendEmail() {
            const email = document.getElementById('email-address').value;
            if (!email) {
                showToast('❌ Введите email адрес');
                return;
            }
            showToast('⏳ Отправка email...');
            setTimeout(() => {
                showToast('✅ Email отправлен успешно!');
                closeModal('export-modal');
            }, 1500);
        }

        function markNotificationDone(notifId) {
            pets.forEach(pet => {
                if (pet.notifications) {
                    const notif = pet.notifications.find(n => n.id === notifId);
                    if (notif) notif.status = 'done';
                }
            });
            renderNotifications();
            updateNotificationBadge();
            renderQuickStats();
            showToast('✅ Уведомление выполнено!');
        }

        function snoozeNotification(notifId) {
            showToast('⏰ Уведомление отложено на 1 час');
        }

        function dismissNotification(notifId) {
            pets.forEach(pet => {
                if (pet.notifications) {
                    pet.notifications = pet.notifications.filter(n => n.id !== notifId);
                }
            });
            renderNotifications();
            updateNotificationBadge();
            renderQuickStats();
            showToast('✕ Уведомление отклонено');
        }

        function saveNotificationSettings() {
            showToast('✅ Настройки сохранены!');
            closeModal('notification-settings-modal');
        }

        function showQuickActions() {
            const actions = ['🍽️ Добавить прием пищи', '📝 Записать вес', '💊 Добавить симптом', '🩺 Медицинская запись'];
            const action = actions[Math.floor(Math.random() * actions.length)];
            showToast(action);
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function formatDateTime(dateString) {
            const date = new Date(dateString);
            const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${hours}:${minutes}`;
        }

        function formatTimeUntil(dateString) {
            const now = new Date();
            const target = new Date(dateString);
            const diff = target - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const days = Math.floor(hours / 24);
            
            if (days > 0) return `через ${days} дн.`;
            if (hours > 0) return `через ${hours} ч.`;
            if (diff > 0) return 'скоро';
            return 'просрочено';
        }

        function showScannerScreen() {
            renderScannerScreen();
            showScreen('scanner-screen');
        }

        function showScannerForPet(petId) {
            currentPet = pets.find(p => p.id === petId);
            renderScannerScreen();
            showScreen('scanner-screen');
        }

        function renderScannerScreen() {
            const content = document.getElementById('scanner-content');
            const petDocs = scannedDocuments.filter(d => !currentPet || d.petId === currentPet.id);
            
            // Get pet select options
            const petSelectOptions = currentPet 
                ? `<option value="${currentPet.id}" selected>${currentPet.name}</option>`
                : '<option value="all">Все питомцы</option>' + pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
            
            content.innerHTML = `
                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 16px;">📷 Сканировать документ</h3>
                    <div class="form-group">
                        <label class="form-label">Питомец</label>
                        <select class="form-control" id="scanner-pet-select">
                            ${petSelectOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Тип документа *</label>
                        <select class="form-control" id="scanner-doc-type" required>
                            <option value="">Выберите тип документа</option>
                            <option value="prescription">💊 Рецепт</option>
                            <option value="test_result">🧪 Результаты анализов</option>
                            <option value="vaccination">💉 Вакцинация</option>
                            <option value="recommendation">📝 Рекомендации</option>
                            <option value="other">📄 Другое</option>
                        </select>
                        <small style="color: var(--color-text-secondary); font-size: 11px; margin-top: 4px; display: block;">
                            Выбор типа документа поможет AI точнее распознать информацию
                        </small>
                    </div>
                    <div class="scan-upload-area" onclick="triggerFileUpload()" style="padding: 20px; text-align: center; border: 2px dashed var(--color-border); border-radius: var(--radius-base); background: var(--color-bg-1); cursor: pointer;">
                        <div style="font-size: 48px; margin-bottom: 12px;">📷</div>
                        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
                            Загрузите фото документа
                        </p>
                        <button class="btn btn-primary" type="button">📤 Выбрать файл</button>
                        <input type="file" id="doc-upload" accept="image/*,.pdf" style="display: none;" onchange="handleDocUpload(event)">
                    </div>
                </div>
                
                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 16px;">🧪 Попробовать примеры</h3>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        <button class="btn btn-secondary" onclick="loadExampleDoc('prescription')">💊 Рецепт</button>
                        <button class="btn btn-secondary" onclick="loadExampleDoc('test_result')">🧪 Анализы</button>
                        <button class="btn btn-secondary" onclick="loadExampleDoc('vaccination')">💉 Вакцинация</button>
                    </div>
                </div>
                
                ${petDocs.length > 0 ? `
                    <div class="card">
                        <h3 style="margin-bottom: 16px;">📋 История сканирований</h3>
                        ${petDocs.map(doc => {
                            const typeNames = {
                                prescription: '💊 Рецепт',
                                test_result: '🧪 Результаты анализов',
                                vaccination: '💉 Вакцинация',
                                recommendation: '📝 Рекомендации',
                                other: '📄 Документ'
                            };
                            const typeEmojis = {
                                prescription: '💊',
                                test_result: '🧪',
                                vaccination: '💉',
                                recommendation: '📝',
                                other: '📄'
                            };
                            return `
                            <div class="scanned-doc-card">
                                <div class="doc-thumbnail">${typeEmojis[doc.type] || '📄'}</div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                        <strong>${typeNames[doc.type] || 'Документ'}</strong>
                                        <span class="confidence-badge confidence-${doc.confidence >= 85 ? 'high' : doc.confidence >= 60 ? 'medium' : 'low'}">
                                            ${doc.confidence >= 85 ? '✓' : doc.confidence >= 60 ? '⚠️' : '❌'} ${doc.confidence}%
                                        </span>
                                    </div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">
                                        ${formatDate(doc.date)} • ${doc.extractedData.clinicName || 'Клиника'}
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm" onclick="viewScannedDoc(${doc.id})">Просмотр</button>
                            </div>
                        `;
                        }).join('')}
                    </div>
                ` : ''}
            `;
        }

        function triggerFileUpload() {
            document.getElementById('doc-upload').click();
        }

        function handleDocUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const docType = document.getElementById('scanner-doc-type')?.value;
            if (!docType) {
                showToast('❌ Пожалуйста, выберите тип документа');
                event.target.value = ''; // Reset file input
                return;
            }
            
            const petSelect = document.getElementById('scanner-pet-select');
            const petId = petSelect ? (petSelect.value === 'all' ? null : parseInt(petSelect.value)) : (currentPet ? currentPet.id : null);
            
            showToast('📷 Файл загружен, AI анализирует...');
            
            // Simulate AI processing
            setTimeout(() => {
                // Load example based on document type
                loadExampleDoc(docType, petId);
            }, 1000);
        }

        function loadExampleDoc(type, petId = null) {
            // Find document by type, or use first available
            let doc = scannedDocuments.find(d => d.type === type);
            if (!doc && scannedDocuments.length > 0) {
                doc = scannedDocuments[0];
            }
            
            // If no document found, create a mock one
            if (!doc) {
                doc = {
                    id: scannedDocuments.length + 1,
                    petId: petId || (currentPet ? currentPet.id : 1),
                    date: new Date().toISOString().split('T')[0],
                    type: type,
                    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect fill='%23f5f5f5' width='200' height='150'/%3E%3Ctext x='100' y='75' font-family='Arial' font-size='14' fill='%23333' text-anchor='middle'%3EDocument%3C/text%3E%3C/svg%3E",
                    aiProcessed: true,
                    confidence: 85,
                    extractedData: {
                        visitDate: new Date().toISOString().split('T')[0],
                        clinicName: "Ветеринарная клиника",
                        doctorName: "Врач",
                        medications: type === 'prescription' ? [
                            { name: "Препарат", dosage: "дозировка", frequency: "частота", duration: "длительность" }
                        ] : [],
                        recommendations: type === 'recommendation' ? "Рекомендации врача" : "",
                        testValues: type === 'test_result' ? {
                            glucose: { value: 5.2, unit: "mmol/L", normal: "3.9-6.1", status: "normal" },
                            creatinine: { value: 95, unit: "μmol/L", normal: "44-133", status: "normal" }
                        } : undefined
                    }
                };
            }
            
            // Update petId if provided
            if (petId) {
                doc.petId = petId;
            }
            
            showScanAnalysisModal(doc);
        }

        function viewScannedDoc(docId) {
            const doc = scannedDocuments.find(d => d.id === docId);
            if (doc) showScanAnalysisModal(doc);
        }

        function showScanAnalysisModal(doc) {
            const content = document.getElementById('scan-document-content');
            
            content.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div class="loading-spinner" id="ai-loading" style="display: none;"></div>
                    <div id="ai-result">
                        <div class="ai-badge" style="margin-bottom: 12px;">✨ AI проанализировал документ</div>
                        <span class="confidence-badge confidence-${doc.confidence >= 85 ? 'high' : doc.confidence >= 60 ? 'medium' : 'low'}" style="font-size: 14px;">
                            ${doc.confidence >= 85 ? '✓ Высокая' : doc.confidence >= 60 ? '⚠️ Средняя' : '❌ Низкая'} точность: ${doc.confidence}%
                        </span>
                    </div>
                </div>
                
                <div class="extracted-data-section">
                    <h3 style="margin-bottom: 16px;">📅 Информация о визите</h3>
                    <div class="form-group">
                        <label class="form-label">Дата визита</label>
                        <input type="date" class="form-control" value="${doc.extractedData.visitDate}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Клиника/Врач</label>
                        <input type="text" class="form-control" value="${doc.extractedData.clinicName}">
                    </div>
                    ${doc.extractedData.doctorName ? `
                        <div class="form-group">
                            <label class="form-label">Врач</label>
                            <input type="text" class="form-control" value="${doc.extractedData.doctorName}">
                        </div>
                    ` : ''}
                </div>
                
                ${doc.extractedData.medications && doc.extractedData.medications.length > 0 ? `
                    <div class="extracted-data-section">
                        <h3 style="margin-bottom: 16px;">💊 Обнаруженные препараты</h3>
                        ${doc.extractedData.medications.map((med, idx) => `
                            <div class="medication-extracted">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                                    <strong>${med.name}</strong>
                                    <span class="confidence-badge confidence-high">✓</span>
                                </div>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;">
                                    <strong>Дозировка:</strong> ${med.dosage}
                                </div>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;">
                                    <strong>Частота:</strong> ${med.frequency}
                                </div>
                                <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;">
                                    <strong>Длительность:</strong> ${med.duration}
                                </div>
                                ${med.instructions ? `
                                    <div style="font-size: 13px; color: var(--color-text-secondary);">
                                        <strong>Инструкции:</strong> ${med.instructions}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${doc.extractedData.recommendations ? `
                    <div class="extracted-data-section">
                        <h3 style="margin-bottom: 16px;">📝 Рекомендации</h3>
                        <textarea class="form-control" rows="4">${doc.extractedData.recommendations}</textarea>
                    </div>
                ` : ''}
                
                ${doc.extractedData.followUpDate ? `
                    <div class="extracted-data-section">
                        <h3 style="margin-bottom: 16px;">📅 Повторный визит</h3>
                        <input type="date" class="form-control" value="${doc.extractedData.followUpDate}">
                    </div>
                ` : ''}
                
                <div style="display: flex; gap: 12px; margin-top: 20px;">
                    <button class="btn btn-primary" onclick="saveScannedData(${doc.id})" style="flex: 1;">💾 Сохранить в медкарту</button>
                    <button class="btn btn-secondary" onclick="closeModal('scan-document-modal')">Отмена</button>
                </div>
            `;
            
            document.getElementById('scan-document-modal').classList.add('active');
        }

        function saveScannedData(docId) {
            const doc = scannedDocuments.find(d => d.id === docId);
            if (!doc) return;
            
            const pet = pets.find(p => p.id === doc.petId);
            if (!pet) return;
            
            // Check if document contains test results
            if (doc.type === 'test_results' && doc.extractedData.testValues) {
                // Create test result
                if (!pet.testResults) pet.testResults = [];
                const newTestResult = {
                    id: pet.testResults.length + 1,
                    date: doc.extractedData.visitDate || doc.date,
                    clinicName: doc.extractedData.clinicName || 'Не указана',
                    type: 'biochemistry',
                    notes: doc.extractedData.recommendations || doc.extractedData.notes || '',
                    values: doc.extractedData.testValues
                };
                
                pet.testResults.unshift(newTestResult);
                closeModal('scan-document-modal');
                showToast('✅ Результаты анализов успешно добавлены!');
                if (currentPet && currentPet.id === pet.id) {
                    showPetProfile(pet.id);
                }
                return;
            }
            
            // Create medical record
            const newRecord = {
                id: pet.medicalRecords.length + 1,
                date: doc.extractedData.visitDate,
                clinicName: doc.extractedData.clinicName,
                visitType: 'routine_checkup',
                diagnosis: 'Визит после сканирования',
                notes: doc.extractedData.recommendations || '',
                medications: doc.extractedData.medications || []
            };
            
            pet.medicalRecords.unshift(newRecord);
            
            // Add medications to active list
            if (doc.extractedData.medications) {
                doc.extractedData.medications.forEach(med => {
                    pet.medications.push({
                        id: pet.medications.length + 1,
                        name: med.name,
                        dosage: med.dosage,
                        frequency: med.frequency,
                        startDate: doc.extractedData.visitDate,
                        reason: 'Назначено врачом'
                    });
                });
            }
            
            closeModal('scan-document-modal');
            showToast('✅ Данные успешно добавлены в медкарту!');
            renderAllRecords();
        }

        function showEditPetScreen(petId) {
            currentPet = pets.find(p => p.id === petId);
            if (!currentPet) return;
            
            renderEditPetScreen();
            showScreen('edit-pet-screen');
        }

        function renderEditPetScreen() {
            if (!currentPet) return;
            
            const content = document.getElementById('edit-pet-content');
            const emoji = currentPet.species === 'dog' ? '🐕' : currentPet.species === 'cat' ? '🐈' : '🐾';
            
            content.innerHTML = `
                <form id="edit-pet-form" onsubmit="savePetProfile(event)">
                    <div class="edit-section">
                        <h3>Основная информация</h3>
                        <div style="text-align: center; margin-bottom: 20px;">
                            <div class="pet-avatar" style="width: 100px; height: 100px; font-size: 48px; margin: 0 auto;">${emoji}</div>
                            <button type="button" class="btn btn-secondary btn-sm" style="margin-top: 12px;">📷 Изменить фото</button>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Имя *</label>
                            <input type="text" class="form-control" name="name" value="${currentPet.name}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Вид *</label>
                            <select class="form-control" name="species" required>
                                <option value="dog" ${currentPet.species === 'dog' ? 'selected' : ''}>Собака</option>
                                <option value="cat" ${currentPet.species === 'cat' ? 'selected' : ''}>Кошка</option>
                                <option value="bird" ${currentPet.species === 'bird' ? 'selected' : ''}>Птица</option>
                                <option value="rabbit" ${currentPet.species === 'rabbit' ? 'selected' : ''}>Кролик</option>
                                <option value="other" ${currentPet.species === 'other' ? 'selected' : ''}>Другое</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Порода *</label>
                            <input type="text" class="form-control" name="breed" value="${currentPet.breed}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Дата рождения *</label>
                            <input type="date" class="form-control" name="dateOfBirth" value="${currentPet.dateOfBirth}" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                            <div class="form-group">
                                <label class="form-label">Пол</label>
                                <select class="form-control" name="gender">
                                    <option value="male" ${currentPet.gender === 'male' ? 'selected' : ''}>Самец</option>
                                    <option value="female" ${currentPet.gender === 'female' ? 'selected' : ''}>Самка</option>
                                    <option value="unknown">Неизвестно</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Стерилизован/Кастрирован</label>
                                <select class="form-control" name="neutered">
                                    <option value="true" ${currentPet.neutered ? 'selected' : ''}>Да</option>
                                    <option value="false" ${!currentPet.neutered ? 'selected' : ''}>Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Текущий вес (кг) *</label>
                            <input type="number" step="0.1" class="form-control" name="weight" value="${currentPet.weight}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Группа крови</label>
                            <select class="form-control" name="bloodGroup">
                                <option value="">Не указана</option>
                                ${currentPet.species === 'dog' ? `
                                    <option value="DEA 1.1+" ${currentPet.bloodGroup === 'DEA 1.1+' ? 'selected' : ''}>DEA 1.1+</option>
                                    <option value="DEA 1.1-" ${currentPet.bloodGroup === 'DEA 1.1-' ? 'selected' : ''}>DEA 1.1-</option>
                                    <option value="DEA 1.2+" ${currentPet.bloodGroup === 'DEA 1.2+' ? 'selected' : ''}>DEA 1.2+</option>
                                    <option value="DEA 1.2-" ${currentPet.bloodGroup === 'DEA 1.2-' ? 'selected' : ''}>DEA 1.2-</option>
                                    <option value="DEA 3+" ${currentPet.bloodGroup === 'DEA 3+' ? 'selected' : ''}>DEA 3+</option>
                                    <option value="DEA 3-" ${currentPet.bloodGroup === 'DEA 3-' ? 'selected' : ''}>DEA 3-</option>
                                    <option value="DEA 4+" ${currentPet.bloodGroup === 'DEA 4+' ? 'selected' : ''}>DEA 4+</option>
                                    <option value="DEA 4-" ${currentPet.bloodGroup === 'DEA 4-' ? 'selected' : ''}>DEA 4-</option>
                                    <option value="DEA 5+" ${currentPet.bloodGroup === 'DEA 5+' ? 'selected' : ''}>DEA 5+</option>
                                    <option value="DEA 5-" ${currentPet.bloodGroup === 'DEA 5-' ? 'selected' : ''}>DEA 5-</option>
                                    <option value="DEA 7+" ${currentPet.bloodGroup === 'DEA 7+' ? 'selected' : ''}>DEA 7+</option>
                                    <option value="DEA 7-" ${currentPet.bloodGroup === 'DEA 7-' ? 'selected' : ''}>DEA 7-</option>
                                ` : `
                                    <option value="A" ${currentPet.bloodGroup === 'A' ? 'selected' : ''}>A</option>
                                    <option value="B" ${currentPet.bloodGroup === 'B' ? 'selected' : ''}>B</option>
                                    <option value="AB" ${currentPet.bloodGroup === 'AB' ? 'selected' : ''}>AB</option>
                                `}
                            </select>
                        </div>
                    </div>
                    
                    <div class="edit-section">
                        <h3>Медицинский профиль</h3>
                        <div class="form-group">
                            <label class="form-label">Известные аллергии</label>
                            <div class="chip-group" id="allergies-chips">
                                ${(currentPet.allergies || []).map(a => `
                                    <div class="chip">
                                        ${a}
                                        <button type="button" onclick="removeChip(this, 'allergy', '${a}')">&times;</button>
                                    </div>
                                `).join('')}
                            </div>
                            <input type="text" class="form-control" id="allergy-input" placeholder="Добавить аллергию" style="margin-top: 8px;" onkeypress="addChipOnEnter(event, 'allergy')">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Хронические заболевания</label>
                            <div class="chip-group" id="conditions-chips">
                                ${(currentPet.conditions || []).map(c => `
                                    <div class="chip">
                                        ${c}
                                        <button type="button" onclick="removeChip(this, 'condition', '${c}')">&times;</button>
                                    </div>
                                `).join('')}
                            </div>
                            <input type="text" class="form-control" id="condition-input" placeholder="Добавить заболевание" style="margin-top: 8px;" onkeypress="addChipOnEnter(event, 'condition')">
                        </div>
                    </div>
                    
                    <div class="edit-section">
                        <h3>Предпочтения</h3>
                        <div class="form-group">
                            <label class="form-label">Предпочитаемая клиника</label>
                            <input type="text" class="form-control" name="preferredClinic" value="${currentPet.preferredVet?.clinic || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Постоянный врач</label>
                            <input type="text" class="form-control" name="preferredDoctor" value="${currentPet.preferredVet?.doctor || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Тип питания</label>
                            <select class="form-control" name="dietaryPreferences">
                                <option value="standard" ${currentPet.dietaryPreferences === 'standard' ? 'selected' : ''}>Стандартный</option>
                                <option value="grain-free" ${currentPet.dietaryPreferences === 'grain-free' ? 'selected' : ''}>Беззерновой</option>
                                <option value="raw" ${currentPet.dietaryPreferences === 'raw' ? 'selected' : ''}>Сыроедение (BARF)</option>
                                <option value="prescription" ${currentPet.dietaryPreferences === 'prescription' ? 'selected' : ''}>Лечебный</option>
                                <option value="senior" ${currentPet.dietaryPreferences === 'senior' ? 'selected' : ''}>Для пожилых</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                        <button type="submit" class="btn btn-primary" style="flex: 1;">💾 Сохранить изменения</button>
                        <button type="button" class="btn btn-secondary" onclick="cancelEditPet()">Отмена</button>
                    </div>
                </form>
                
                <div class="danger-zone">
                    <h3>⚠️ Опасная зона</h3>
                    <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
                        Удаление питомца приведет к безвозвратной потере всех медицинских записей, симптомов и данных.
                    </p>
                    <button type="button" class="btn btn-danger" onclick="showDeletePetModal(${currentPet.id})">🗑️ Удалить питомца</button>
                </div>
            `;
        }

        function addChipOnEnter(event, type) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const input = event.target;
                const value = input.value.trim();
                if (!value) return;
                
                const container = document.getElementById(type === 'allergy' ? 'allergies-chips' : 'conditions-chips');
                const chip = document.createElement('div');
                chip.className = 'chip';
                chip.innerHTML = `
                    ${value}
                    <button type="button" onclick="removeChip(this, '${type}', '${value}')">&times;</button>
                `;
                container.appendChild(chip);
                
                if (type === 'allergy') {
                    if (!currentPet.allergies) currentPet.allergies = [];
                    currentPet.allergies.push(value);
                } else {
                    if (!currentPet.conditions) currentPet.conditions = [];
                    currentPet.conditions.push(value);
                }
                
                input.value = '';
            }
        }

        function removeChip(button, type, value) {
            button.parentElement.remove();
            if (type === 'allergy') {
                currentPet.allergies = currentPet.allergies.filter(a => a !== value);
            } else {
                currentPet.conditions = currentPet.conditions.filter(c => c !== value);
            }
        }

        function savePetProfile(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            currentPet.name = formData.get('name');
            currentPet.species = formData.get('species');
            currentPet.breed = formData.get('breed');
            currentPet.dateOfBirth = formData.get('dateOfBirth');
            currentPet.weight = parseFloat(formData.get('weight'));
            currentPet.gender = formData.get('gender');
            currentPet.neutered = formData.get('neutered') === 'true';
            currentPet.bloodGroup = formData.get('bloodGroup') || '';
            currentPet.dietaryPreferences = formData.get('dietaryPreferences');
            
            // Calculate age
            const birthDate = new Date(currentPet.dateOfBirth);
            currentPet.age = new Date().getFullYear() - birthDate.getFullYear();
            
            // Update preferred vet
            if (!currentPet.preferredVet) currentPet.preferredVet = {};
            currentPet.preferredVet.clinic = formData.get('preferredClinic');
            currentPet.preferredVet.doctor = formData.get('preferredDoctor');
            
            renderPets();
            showPetProfile(currentPet.id);
            showToast('✅ Профиль обновлен!');
        }

        function cancelEditPet() {
            if (currentPet) {
                showPetProfile(currentPet.id);
            } else {
                showScreen('screen-pets');
            }
        }

        function showDeletePetModal(petId) {
            const pet = pets.find(p => p.id === petId);
            if (!pet) return;
            
            const content = document.getElementById('delete-pet-content');
            content.innerHTML = `
                <div id="delete-step-1">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 64px; margin-bottom: 16px;">⚠️</div>
                        <h3 style="margin-bottom: 12px;">Удалить ${pet.name}?</h3>
                        <p style="color: var(--color-text-secondary);">
                            Это приведет к безвозвратному удалению всех медицинских записей, симптомов, 
                            препаратов и данных для ${pet.name}. Это действие нельзя отменить.
                        </p>
                    </div>
                    <div style="background: var(--color-bg-4); border-radius: var(--radius-base); padding: 16px; margin-bottom: 20px;">
                        <strong>Будет удалено:</strong>
                        <ul style="margin: 8px 0 0 20px; color: var(--color-text-secondary);">
                            <li>${pet.medicalRecords?.length || 0} медицинских записей</li>
                            <li>${pet.symptoms?.length || 0} записей о симптомах</li>
                            <li>${pet.medications?.length || 0} активных препаратов</li>
                            <li>${pet.nutritionData?.meals?.length || 0} записей о питании</li>
                            <li>Вся история веса и целей</li>
                        </ul>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-secondary" onclick="closeModal('delete-pet-modal')" style="flex: 1;">Отмена</button>
                        <button class="btn btn-danger" onclick="showDeleteStep2(${petId})" style="flex: 1;">Продолжить</button>
                    </div>
                </div>
                
                <div id="delete-step-2" style="display: none;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; margin-bottom: 16px;">📦</div>
                        <h3 style="margin-bottom: 12px;">Экспортировать данные?</h3>
                        <p style="color: var(--color-text-secondary);">
                            Рекомендуем экспортировать медицинские записи ${pet.name} перед удалением.
                        </p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
                        <button class="btn btn-primary" onclick="exportBeforeDelete(${petId})">📥 Экспортировать как PDF</button>
                        <button class="btn btn-outline" onclick="showDeleteStep3(${petId})">Пропустить и продолжить</button>
                    </div>
                    <button class="btn btn-secondary" onclick="closeModal('delete-pet-modal')" style="width: 100%;">Отмена</button>
                </div>
                
                <div id="delete-step-3" style="display: none;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; margin-bottom: 16px;">🔐</div>
                        <h3 style="margin-bottom: 12px;">Подтвердите удаление</h3>
                        <p style="color: var(--color-text-secondary); margin-bottom: 20px;">
                            Для подтверждения введите имя питомца: <strong>${pet.name}</strong>
                        </p>
                    </div>
                    <form onsubmit="confirmDelete(event, ${petId}, '${pet.name}')">
                        <div class="form-group">
                            <input type="text" class="form-control" id="delete-confirm-input" placeholder="Введите имя питомца" required>
                            <div id="delete-error" style="color: var(--pet-accent); font-size: 12px; margin-top: 4px; display: none;">Имя не совпадает</div>
                        </div>
                        <div style="display: flex; gap: 12px;">
                            <button type="button" class="btn btn-secondary" onclick="closeModal('delete-pet-modal')" style="flex: 1;">Отмена</button>
                            <button type="submit" class="btn btn-danger" style="flex: 1;">🗑️ Удалить навсегда</button>
                        </div>
                    </form>
                </div>
            `;
            
            document.getElementById('delete-pet-modal').classList.add('active');
        }

        function showDeleteStep2(petId) {
            document.getElementById('delete-step-1').style.display = 'none';
            document.getElementById('delete-step-2').style.display = 'block';
        }

        function showDeleteStep3(petId) {
            document.getElementById('delete-step-2').style.display = 'none';
            document.getElementById('delete-step-3').style.display = 'block';
        }

        function exportBeforeDelete(petId) {
            showToast('⏳ Экспорт данных...');
            setTimeout(() => {
                showToast('✅ PDF готов к скачиванию!');
                showDeleteStep3(petId);
            }, 2000);
        }

        function confirmDelete(event, petId, petName) {
            event.preventDefault();
            const input = document.getElementById('delete-confirm-input').value.trim();
            const error = document.getElementById('delete-error');
            
            if (input.toLowerCase() !== petName.toLowerCase()) {
                error.style.display = 'block';
                return;
            }
            
            // Perform deletion
            const petIndex = pets.findIndex(p => p.id === petId);
            if (petIndex !== -1) {
                const deletedPet = pets[petIndex];
                pets.splice(petIndex, 1);
                
                // Remove scanned documents
                scannedDocuments = scannedDocuments.filter(d => d.petId !== petId);
                
                closeModal('delete-pet-modal');
                showToast(`✅ ${deletedPet.name} был удален`);
                
                if (pets.length === 0) {
                    showScreen('dashboard');
                    renderPets();
                } else {
                    showScreen('dashboard');
                    renderPets();
                    renderAllRecords();
                    renderSymptoms();
                    renderNutrition();
                    renderWeightTracker();
                    renderNotifications();
                }
                
                renderQuickStats();
                updateNotificationBadge();
            }
        }

        // Initialize on load
        init();
