function getDatabase(database, table)
{
    return function(data)
        {
            database.add(table, data)
        }
}