// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//Pet
let isHavePet = new Map();
isHavePet.set("Monica", "Yes");
isHavePet.set("Wendy", "No");

//uniq for favoriteColor & favoriteRestaurant
const uniq = (array) => {
    return [...new Set(array)];
  };

//firstUser > Monica
const firstUser = {
    name: "Monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoritColor: uniq(["Yellow", "Pink", "White", "Purple"]),
    isHavePet: isHavePet.get("Monica"),
    education: {
      sd: {
        name: "SD 01",
        city: "Jakarta",
        graduate: "2016",
      },
      smp: {
        name: "SMP 02",
        city: "Jakarta",
        graduate: "2019",
      },
      sma: {
        name: "SMA 03",
        city: "Tangerang",
      },
    },
    favoriteRestaurant: uniq(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]),
  };
  
//secondUser > Wendy
const secondUser = {
    name: "Wendy",
    gender: "male",
    age: 23,
    email: "wendy@dingdong.com",
    favoritColor: uniq(["Blue", "Black", "Grey"]),
    isHavePet: isHavePet.get("Wendy"),
    education: {
      sd: {
        name: "SD 02",
        city: "Jakarta",
        graduate: "2010",
      },
      smp: {
        name: "SMP 03",
        city: "Bogor",
        graduate: "2013",
      },
      sma: {
        name: "SMA 01",
        city: "Surabaya",
        graduate: 2016,
      },
      universitas: {
        name: "Universitas Maju",
        city: "Tanggerang",
      },
    },
    favoriteRestaurant: uniq(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]),
  };

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = new Set([firstUser, secondUser]);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};