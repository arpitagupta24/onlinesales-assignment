//Queue Implementation with Async/Await to always get result for both cases either get rejected or success.
//Try catch used to handle error in better way and get proper error message when any request get rejected.

const queue = async.queue(async (expression, callback) => {
    try {
        // we will send the expression to the API
        const response = await axios.post(API_ENDPOINT, { expression });
        console.log(`${expression} => ${response.data.result}`);
        callback();
    } catch (error) {
        console.error(`Error evaluating ${expression}: ${error.message}`);
        callback(error);
    }
}, 50);

// now we can process all the request via the Queue method.


// NOTE - I am still working and learning so wasn't completely able to implement but I have clear understanding of implementation way and it's working
