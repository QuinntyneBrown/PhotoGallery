using Chloe.Server.Data.Contracts;
using Chloe.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Services
{
    public class AuthorService: IAuthorService
    {
        public AuthorService(IChloeUow uow)
        {
            this.uow = uow;
        }


        protected readonly IChloeUow uow;
    }
}