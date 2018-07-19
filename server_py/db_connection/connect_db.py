# database connection file

# imports
from ibmdbpy import IdaDataBase, IdaDataFrame
import json
import sys
sys.path.append('../')

# approach for getting env variables
from settings import concatCredentials
dsn_concatenate = concatCredentials()

# db connection via json
# credentials_file = open('db_credentials.json').read()
# cred_json = json.loads(credentials_file)
# idaDb = IdaDataBase(dsn=cred_json['dsn'])

#must impost from .env

# idaDb = IdaDataBase(dsn=dsn_concatenate)
idaDb = IdaDataBase('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIIP', uid='wjn20801', pwd='581j76tl49k17f^s')

idaDb.show_tables()

