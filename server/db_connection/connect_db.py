# db connection

from ibmdbpy import IdaDataBase, IdaDataFrame
import json
credentials_file = open('db_credentials.json').read()
cred_json = json.loads(credentials_file)
idaDb = IdaDataBase(dsn=cred_json['dsn'])

idaDb.show_tables()

