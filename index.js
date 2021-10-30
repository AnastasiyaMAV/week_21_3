const okBtn = document.getElementById('okBtn');
const clearBtn = document.getElementById('clearBtn');

okBtn.addEventListener('click', (event) => {
    event.preventDefault();
    formData = new FormData(formElementCat);

    formData.append('nikenameCat', document.getElementById('nikenameCat').value);

    let sexCat = null;
    let elementSex = document.getElementsByName('sexCat');
    for (let i = 0; elementSex[i]; ++i) {
        if (elementSex[i].checked) {
            sexCat = elementSex[i].value;
            break;
        }
    }
    formData.set('sexCat', sexCat);

    formData.set('breedCat', document.getElementById('breedCat').value);

    let catFood = "";
    let elementFood = document.getElementsByName('catFood');
    for (let i = 0; elementFood[i]; ++i) {
        if (elementFood[i].checked) {
            catFood = ` ${elementFood[i].value}${catFood}`;
        }   
    }
    formData.set('catFood', catFood.trim());

    formData.set('lastnameOwner', document.getElementById('lastnameOwner').value);
    formData.set('firstnameOwner1', document.getElementById('firstnameOwner1').value);
    formData.set('firstnameOwner2', document.getElementById('firstnameOwner2').value);
    formData.set('telOwner', document.getElementById('telOwner').value);
    formData.set('addressOwner', document.getElementById('addressOwner').value);

    // console.log(formData);

    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            clearInput();
            Swal.fire('Ура!', 'Все данные успешно отправлены на сервер!');
        })
        .catch(err => console.log(err));
    // console.log(FormData);
});

clearBtn.addEventListener('click', () => {
    clearInput();
});

let clearInput = () => {
    document.getElementById('nikenameCat').value = "";

    for (let i = 0; document.getElementsByName('sexCat')[i]; ++i) {
        document.getElementsByName('sexCat')[i].checked = false; 
    }

    document.getElementById('breedCat').value = "";

    for (let i = 0; document.getElementsByName('catFood')[i]; ++i) {
        document.getElementsByName('catFood')[i].checked = false;
    }

    document.getElementById('lastnameOwner').value = "";
    document.getElementById('firstnameOwner1').value = "";
    document.getElementById('firstnameOwner2').value = "";
    document.getElementById('telOwner').value = "";
    document.getElementById('addressOwner').value = "";
}
