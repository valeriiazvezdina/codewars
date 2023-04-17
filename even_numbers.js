for (let i = 0; i <= 100; i++) 
{ 
    if (i % 2) continue; 
    else console.log(i);
}

function printEvenNumber()
{
    let counter = 0;
    for (let i = 1; counter < 10; i++)
    {
        if (i % 2 == 0) 
        {
            console.log(i);
        } else continue;
        counter++;
    }
}

printEvenNumber();
