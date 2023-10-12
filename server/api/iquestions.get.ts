/**
 * Retrieve Poems from database - default is 5 of the latest poems
 * FUTURE - have option to search by Cat name
 */
import client from './mongoConnection'

interface Questions {
    question: string;
    tags: Array<string>;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    var questions_array: Questions[];

    const questionLimit = 20;
    let filter = { tags: "Basic" }

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("CareerInformaticsDB");
        const questionCollection = database.collection<Questions>("Questions");

        const questions = questionCollection.find<Questions>(
            filter,
            {
                sort: { $natural: -1 }, //return latest first by date
                projection: { _id: 1, question: 1, tags: 1 },
            }
        ).limit(questionLimit);

        if ((await questionCollection.countDocuments(filter)) === 0) {
            console.warn("No documents found!");
            return []
        }

        questions_array = await questions.toArray();

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    return questions_array;

});